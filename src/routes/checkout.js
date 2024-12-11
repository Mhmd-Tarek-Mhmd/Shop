import { useDocumentTitle } from "../hooks";

import Section from "../components/section";
import CheckoutForm from "../containers/checkout";

function Checkout() {
  useDocumentTitle("Checkout");

  return (
    <Section title="Checkout">
      <CheckoutForm />
    </Section>
  );
}

export default Checkout;
