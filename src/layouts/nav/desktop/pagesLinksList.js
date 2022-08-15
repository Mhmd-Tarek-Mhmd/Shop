import Toolbar from "@mui/material/Toolbar";

import Link from "../../../components/link";
import PagesLinks from "../pagesLinks";

function PagesLinksList() {
  return (
    <Toolbar
      component="ul"
      sx={{
        m: 0,
        gap: 2,
        listStyle: "none",
      }}
    >
      <PagesLinks
        Element={Link}
        role="menuitem"
        color="inherit"
        underline="hover"
        variant="button"
      />
    </Toolbar>
  );
}

export default PagesLinksList;
