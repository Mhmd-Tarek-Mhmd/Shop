import { useState, useEffect } from "preact/hooks";

import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import PagesLinks from "../pagesLinks";

function PagesLinksMenu({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {if (isOpen) document.body.style.paddingRight = 0}, [isOpen]);

  return (
    <>
      <Tooltip title={`${isOpen ? "Close" : "Open"} menu`} arrow>
        <IconButton
          color="inherit"
          id="pages-button"
          aria-controls={isOpen ? "pages-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : undefined}
          onClick={handleClick}
          sx={{ p: 0, ml: 1, order: 1 }}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="pages-menu"
        sx={{
          top: "16px",
          display: { md: "none" },
          ".css-6hp17o-MuiList-root-MuiMenu-list": { py: 0 },
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        TransitionComponent={Fade}
      >
        <PagesLinks
          Element={MenuItem}
          component="a"
          sx={{ textTransform: "capitalize" }}
        />

        {!user && (
          <>
            <Divider sx={{ my: "0 !important" }} />
            <MenuItem href="/auth/sign-up" component="a">
              Sign up
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}

export default PagesLinksMenu;
