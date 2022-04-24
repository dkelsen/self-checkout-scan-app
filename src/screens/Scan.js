import { useContext, useState } from "react";
import styled from "styled-components";
import Quagga from "quagga";

import Scanner from "../components/Scanner";
import Modal from "../components/Modal";
import { ScanHeader } from "../components/Header";
import Button from "../components/Button";
import { RoutingContext, pagesMapping } from "../context/Routing";
import { CheckoutContext } from "../context/Checkout";

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
  const { setPage } = useContext(RoutingContext);
  const { addItem } = useContext(CheckoutContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemCode, setItemCode] = useState("");
  const [itemName, setItemName] = useState("");

  const handleDetection = (code) => {
    if (isModalOpen) return;

    Quagga.stop();
    setItemCode(code);
    setIsModalOpen(true);
  };

  const closeScanner = () => {
    setIsModalOpen(false);
    setPage(pagesMapping.home);
  };

  const handleSave = () => {
    addItem(itemCode, itemName);
    setPage(pagesMapping.home);
  };

  return (
    <div>
      <ScanHeader />

      {isModalOpen ? (
        <Confirmation>
          <h3>Item Scanned!</h3>
          <Input
            placeholder="Enter Item Name"
            onChange={(event) => setItemName(event.target.value)}
          />
          <ButtonGroup>
            <Button onClick={handleSave}>Save</Button>
            <Button flat onClick={closeScanner}>
              Cancel
            </Button>
          </ButtonGroup>
        </Confirmation>
      ) : (
        <Scanner onDetected={handleDetection} />
      )}
    </div>
  );
};

export default Scan;
