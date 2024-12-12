import Box from "@mui/material/Box";

import MoreMenu from "./moreMenu";
import AccountMenu from "../accountMenu";
import PagesLinksMenu from "./pagesLinksMenu";

function MobileNav({ user }) {
  return (
    <Box sx={{ display: { sm: "none" } }}>
      <MoreMenu />
      {user && <AccountMenu user={user} />}
      <PagesLinksMenu user={user} />
    </Box>
  );
}

export default MobileNav;
