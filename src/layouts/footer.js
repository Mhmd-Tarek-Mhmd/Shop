import Match from "preact-router/Match";

import { useThemeColors } from "../hooks";

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
  const grey = useThemeColors("grey", "hex", 200, 800);

  return (
    <Match>
      {({ url }) =>
        !url.includes("auth") && (
          <Box
            component="footer"
            sx={{
              py: 2,
              backgroundColor: grey,
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
        )
      }
    </Match>
  );
}

export default Footer;

function SocialIcons() {
  return (
    <Toolbar disableGutters component="ul">
      <IconButton
        href="https://facebook.com"
        target="_blank"
        role="listitem"
        aria-label="To Facebook page"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href="https://twitter.com"
        target="_blank"
        role="listitem"
        aria-label="To Twitter page"
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        href="https://instagram.com"
        target="_blank"
        role="listitem"
        aria-label="To Instagram page"
      >
        <InstagramIcon />
      </IconButton>
    </Toolbar>
  );
}
