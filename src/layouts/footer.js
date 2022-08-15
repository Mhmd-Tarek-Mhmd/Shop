import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import Logo from "../components/logo";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo />
          <SocialIcons />
        </Toolbar>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          Copyright © {new Date().getFullYear()} Shop All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

function SocialIcons() {
  return (
    <Toolbar disableGutters component="ul">
      <IconButton
        href="https://facebook.com"
        target="_blank"
        role="menuitem"
        aria-label="To Facebook page"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href="https://twitter.com"
        target="_blank"
        role="menuitem"
        aria-label="To Twitter page"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        href="https://instagram.com"
        target="_blank"
        role="menuitem"
        aria-label="To Instagram page"
      >
        <InstagramIcon />
      </IconButton>
    </Toolbar>
  );
}
