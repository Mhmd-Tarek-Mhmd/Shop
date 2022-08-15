import { useState, useRef, useEffect } from "preact/hooks";

import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Tooltip from "@mui/material/Tooltip";
import MenuList from "@mui/material/MenuList";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import ThemeToggler from "../themeToggler";
import { WishList, Cart } from "../ShoppingLinks";

function MoreMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown({ key, target, ...event }) {
    const menuItems = [...target.parentElement.children];

    if (key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (key === "Escape") {
      setOpen(false);
    } else if (key === "ArrowRight") {
      target.blur();

      if (menuItems.indexOf(target) !== menuItems.length - 1) {
        target.nextElementSibling.focus();
      } else {
        menuItems[0].focus();
      }
    } else if (key === "ArrowLeft") {
      target.blur();

      menuItems.indexOf(target)
        ? target.previousElementSibling.focus()
        : menuItems[menuItems.length - 1].focus();
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Tooltip title="More" arrow>
        <IconButton
          color="inherit"
          ref={anchorRef}
          id="more-button"
          aria-controls={open ? "more-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreVert />
        </IconButton>
      </Tooltip>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="more-menu"
                  onKeyDown={handleListKeyDown}
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    py: 0,
                  }}
                >
                  <ThemeToggler Element={MenuItem} />
                  <WishList Element={MenuItem} component="a" />
                  <Cart Element={MenuItem} component="a" />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default MoreMenu;
