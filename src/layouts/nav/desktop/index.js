import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import AccountMenu from "../accountMenu";
import ThemeToggler from "../themeToggler";
import PagesLinksList from "./pagesLinksList";
import { WishList, Cart } from "../ShoppingLinks";
import ButtonLink from "../../../components/buttonLink";

function DesktopNav({ user }) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
      <PagesLinksList />

      <ThemeToggler Element={IconButton} color="inherit" />
      <WishList Element={ButtonLink} color="inherit" />
      <Cart Element={ButtonLink} color="inherit" />

      {user ? (
        <AccountMenu user={user} />
      ) : (
        <ButtonLink
          variant="outlined"
          color="inherit"
          href="/login"
          sx={{ ml: 2 }}
        >
          Login
        </ButtonLink>
      )}
    </Box>
  );
}

export default DesktopNav;
