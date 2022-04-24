import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
  border: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }

  ${({ flat }) =>
    flat
      ? css`
          background: transparent;
          color: black;
          border: 1px solid ${({ theme }) => theme.colors.primary};
        `
      : css`
          background: ${({ theme }) => theme.colors.primary};
          color: white;
        `}
`;

const Button = ({
  children,
  flat,
  className,
  onClick = () => {
    /* */
  },
}) => {
  return (
    <Wrapper onClick={onClick} flat={flat} className={className}>
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  flat: PropTypes.bool,
  classname: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
