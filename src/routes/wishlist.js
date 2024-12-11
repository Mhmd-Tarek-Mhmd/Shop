import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";

import Section from "../components/section";
import WishlistItems from "../containers/wishlist";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  useDocumentTitle("Wishlist");

  return (
    <Section title="My wishlist">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {wishlist.length ? (
          <WishlistItems wishlist={wishlist} />
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
