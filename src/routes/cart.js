import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";

import CartList from "../containers/cart";
import Section from "../components/section";

function Cart() {
  const cart = useSelector((state) => state.cart);
  useDocumentTitle("Cart");

  return (
    <Section title="My cart">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {cart.length ? (
          <CartList cart={cart} />
        ) : (
          <Alert
            severity="info"
            sx={{ mx: "auto", width: "50%", minWidth: 200 }}
          >
            Cart is empty
          </Alert>
        )}
      </Container>
    </Section>
  );
}

export default Cart;
