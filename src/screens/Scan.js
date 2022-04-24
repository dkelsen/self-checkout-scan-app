import styled from "styled-components";

import Scanner from "../components/Scanner";
import { ScanHeader } from "../components/Header";

const Container = styled.div``;

const Scan = () => {
  return (
    <Container>
      <ScanHeader />
      <Scanner />
    </Container>
  );
};

export default Scan;
