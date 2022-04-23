import styled, { css } from "styled-components";

const Wrapper = styled.button`
  width: 100px;

  border: none;
  padding: 10px 0;
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
  onClick = () => {
    /* */
  },
}) => {
  return (
    <Wrapper onClick={onClick} flat={flat}>
      {children}
    </Wrapper>
  );
};

export default Button;
