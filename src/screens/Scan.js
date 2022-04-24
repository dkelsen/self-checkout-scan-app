import { useState } from "react";
import styled from "styled-components";

import Scanner from "../components/Scanner";
import Modal from "../components/Modal";
import { ScanHeader } from "../components/Header";
import Button from "../components/Button";

const Confirmation = styled(Modal)`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme.colors.success};
  }
`;

const Input = styled.input`
  border: none;
  padding: 10px 10px 5px 0;
  outline: none;
  border-bottom: 1px solid black;
  margin-bottom: 25px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 47%;
  }
`;

const Scan = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [itemName, setItemName] = useState("");

  const handleDetection = (code) => {
    console.log("***", code);
  };

  return (
    <div>
      <ScanHeader />
      <Scanner onDetected={handleDetection} />

      {isOpen && (
        <Confirmation>
          <h3>Item Scanned!</h3>
          <Input
            placeholder="Enter Name"
            onChange={(event) => setItemName(event.target.value)}
          />
          <ButtonGroup>
            <Button>Save</Button>
            <Button flat>Cancel</Button>
          </ButtonGroup>
        </Confirmation>
      )}
    </div>
  );
};

export default Scan;
