import styled from "styled-components";

import Header from "../components/Header";
import Item, { NewItem } from "../components/Item";
import Button from "../components/Button";

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
  return (
    <Container>
      <Header />
      <h2>Cart</h2>
      <Item>Item Name</Item>
      <NewItem />
      <CheckoutButton>Check Out</CheckoutButton>
    </Container>
  );
};

export default Home;
