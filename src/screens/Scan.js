import styled from "styled-components";

import Scanner from "../components/Scanner";
import { ScanHeader } from "../components/Header";

const Container = styled.div``;

const Scan = () => {
  const handleDetection = (code) => {
    console.log("***", code);
  };

  return (
    <Container>
      <ScanHeader />
      <Scanner onDetected={handleDetection} />
    </Container>
  );
};

export default Scan;
