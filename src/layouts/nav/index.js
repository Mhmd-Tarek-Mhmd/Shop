import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Logo from "../../components/logo";
import DesktopNav from "./desktop";
import MobileNav from "./mobile";

const homeStyle = {
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  boxShadow: "unset",
  position: "absolute",
  background: "transparent",
};

function Nav() {
  const user = {};
  const { pathname } = location;

  return (
    <AppBar
      position="static"
      component="nav"
      sx={pathname === "/" && homeStyle}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <Toolbar
            disableGutters
            sx={{ flexGrow: 1, justifyContent: "flex-end" }}
          >
            <DesktopNav user={user} />
            <MobileNav user={user} />
          </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
