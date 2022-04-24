import { useContext } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Item, { NewItem } from "../components/Item";
import Button from "../components/Button";
import { CheckoutContext } from "../context/Checkout";
import { RoutingContext, pagesMapping } from "../context/Routing";

const CheckoutButton = styled(Button)`
  margin: auto auto 0 auto;
`;

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Home = () => {
  const { items } = useContext(CheckoutContext);
  const { setPage } = useContext(RoutingContext);

  return (
    <Container>
      <Header />
      <h2>Cart</h2>
      {Object.keys(items).map((item) => (
        <Item itemId={item} key={item}>
          {items[item]}
        </Item>
      ))}
      <NewItem onClick={() => setPage(pagesMapping.scan)} />
      <CheckoutButton>Check Out</CheckoutButton>
    </Container>
  );
};

export default Home;
