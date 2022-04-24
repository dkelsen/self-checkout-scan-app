import { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { RoutingContext, pagesMapping } from "../context/Routing";

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding: 15px;
  background: rgba(0, 0, 0, 0.15);
  width: 100%;

  svg {
    margin-right: 10px;
  }
`;

const ReturnButton = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ScanHeader = () => {
  const { setPage } = useContext(RoutingContext);

  return (
    <Wrapper>
      <ReturnButton
        onClick={() => {
          console.log("**");
          setPage(pagesMapping.home);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back</p>
      </ReturnButton>
    </Wrapper>
  );
};

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
