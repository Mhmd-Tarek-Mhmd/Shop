import { useDocumentTitle } from "../hooks";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function NotFound() {
  useDocumentTitle("Not Found");

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 6,
        rowGap: 4,
        display: "grid",
        textAlign: "center",
        justifyItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
        Sorry, page not found!
      </Typography>
      <Typography sx={{ mt: -1 }}>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </Typography>
      <img
        aria-hidden="true"
        src="../assets/images/404.svg"
        alt=""
        style={{ maxWidth: "100%" }}
      />
      <Button variant="contained" href="/" sx={{ mt: 4 }}>
        Go to Home
      </Button>
    </Container>
  );
}

export default NotFound;
