import { useState } from "react";
import styled from "styled-components";

import Scanner from "../components/Scanner";
import Modal from "../components/Modal";
import { ScanHeader } from "../components/Header";

const Container = styled.div``;

const Scan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDetection = (code) => {
    console.log("***", code);
  };

  return (
    <Container>
      <ScanHeader />
      <Scanner onDetected={handleDetection} />

      {isOpen && (
        <Modal>
          <p>Success!</p>
        </Modal>
      )}
    </Container>
  );
};

export default Scan;
