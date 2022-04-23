import styled from "styled-components";

const Logo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

const Header = () => {
  return (
    <div>
      <Logo src="/full_logo.png" alt="Shoppeur"></Logo>
    </div>
  );
};

export default Header;
