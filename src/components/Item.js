import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const NewItemWrapper = styled.div`
  cursor: pointer;

  p {
    display: inline;
  }

  svg {
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
  }

  svg {
    cursor: pointer;
    opacity: 0.5; // show as disabled
  }
`;

const Item = ({ children }) => {
  return (
    <Wrapper>
      <span>{children}</span>
      <Options>
        <FontAwesomeIcon icon={faPencil} />
        <FontAwesomeIcon icon={faTrash} />
      </Options>
    </Wrapper>
  );
};

Item.propTypes = {
  children: PropTypes.string,
};

export default Item;
