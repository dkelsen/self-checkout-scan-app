import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Quagga from "quagga";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  canvas,
  video {
    height: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    right: 0;
  }

  canvas.drawingBuffer,
  video.drawingBuffer {
    width: 100%;
    height: 100%;
  }
`;

const config = {
  inputStream: {
    type: "LiveStream",
    constraints: {
      facingMode: "environment",
      aspectRatio: { min: 1, max: 2 },
    },
  },
  locator: {
    patchSize: "medium",
    halfSample: true,
  },
  numOfWorkers: 2,
  frequency: 10,
  decoder: {
    readers: ["ean_reader"],
  },
  locate: true,
};

const Scanner = ({ onDetected }) => {
  const detected = useCallback(
    (result) => {
      if (result && result.codeResult.startInfo.error < 0.3)
        onDetected(result.codeResult.code);
    },
    [onDetected]
  );

  useEffect(() => {
    Quagga.init(config, (error) => {
      if (error) console.log("Error:", error);

      Quagga.start();
      return () => Quagga.stop();
    });

    // Detecting boxes on stream
    Quagga.onProcessed((result) => {
      const drawingCtx = Quagga.canvas.ctx.overlay;
      const drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            Number(drawingCanvas.getAttribute("width")),
            Number(drawingCanvas.getAttribute("height"))
          );

          result.boxes
            .filter((box) => box !== result.box)
            .forEach((box) =>
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2,
              })
            );
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2,
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });

    Quagga.onDetected(detected);

    return () => Quagga.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <Wrapper id="interactive" className="viewport" />
  );
};

export default Scanner;
