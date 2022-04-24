import { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import { CheckoutContext } from "../context/Checkout";

const NewItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  p {
    display: inline;
  }

  svg {
    height: 20px;
    margin-right: 10px;
  }
`;

export const NewItem = ({ onClick, className }) => {
  return (
    <NewItemWrapper onClick={onClick} className={className}>
      <FontAwesomeIcon icon={faPlusSquare} />
      <p>Add Item</p>
    </NewItemWrapper>
  );
};

NewItem.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Options = styled.span`
  svg:first-of-type {
    margin-right: 10px;
    opacity: 0.5; // show as disabled
  }

  svg:nth-of-type(2) {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.danger};
  }
`;

const Item = ({ children, itemId }) => {
  const { deleteItem } = useContext(CheckoutContext);

  return (
    <Wrapper>
      <span>{children}</span>
      <Options>
        <FontAwesomeIcon icon={faPencil} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(itemId)} />
      </Options>
    </Wrapper>
  );
};

Item.propTypes = {
  children: PropTypes.string,
  ItemId: PropTypes.string,
};

export default Item;
