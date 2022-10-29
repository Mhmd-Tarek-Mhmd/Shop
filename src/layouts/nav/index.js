import Router from "preact-router";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Logo from "../../components/logo";
import DesktopNav from "./desktop";
import MobileNav from "./mobile";

function Nav() {
  return (
    <Router>
      <HomeNav path="/" />
      <DefaultNav default />
    </Router>
  );
}

export default Nav;

const HomeNav = () => (
  <AppBar
    position="static"
    component="nav"
    sx={{
      top: 0,
      left: 0,
      zIndex: 99,
      width: "100%",
      boxShadow: "unset",
      position: "absolute",
      background: "transparent",
    }}
  >
    <NavContent />
  </AppBar>
);
const DefaultNav = () => (
  <AppBar position="static" component="nav">
    <NavContent />
  </AppBar>
);

const NavContent = () => {
  const user = {};

  return (
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
  );
};
