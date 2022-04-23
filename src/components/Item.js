import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
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

export default Item;
