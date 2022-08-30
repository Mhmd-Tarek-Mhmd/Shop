import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";

import ItemList from "./itemList";
import Section from "../../components/section";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  useDocumentTitle("Wishlist - Shop");

  return (
    <Section title="My wishlist">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {wishlist.length ? (
          <ItemList wishlist={wishlist} />
        ) : (
          <Alert
            severity="info"
            sx={{ mx: "auto", width: "50%", minWidth: 200 }}
          >
            Wishlist is empty
          </Alert>
        )}
      </Container>
    </Section>
  );
}

export default Wishlist;
