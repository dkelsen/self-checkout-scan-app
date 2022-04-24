import styled from "styled-components";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  box-sizing: border-box;
  background: white;
  width: 100%;
  padding: 25px;
  border-radius: 5px;
`;

const Modal = ({ children, className }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Container className={className}>{children}</Container>
    </Overlay>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};

export default Modal;
