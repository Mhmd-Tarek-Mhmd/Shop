import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import AccountMenu from "../accountMenu";
import ThemeToggler from "../themeToggler";
import PagesLinksList from "./pagesLinksList";
import { WishList, Cart } from "../ShoppingLinks";

function DesktopNav({ user }) {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
      <PagesLinksList />

      <ThemeToggler Element={IconButton} color="inherit" />
      <WishList Element={IconButton} color="inherit" />
      <Cart Element={IconButton} color="inherit" />

      {user ? (
        <AccountMenu user={user} />
      ) : (
        <Button
          variant="outlined"
          color="inherit"
          href="/auth/sign-up"
          sx={{ ml: 2 }}
        >
          Sign up
        </Button>
      )}
    </Box>
  );
}

export default DesktopNav;
