import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Logo from "../../components/logo";
import DesktopNav from "./desktop";
import MobileNav from "./mobile";

function Nav() {
  const user = {};

  return (
    <AppBar position="static" component="nav">
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