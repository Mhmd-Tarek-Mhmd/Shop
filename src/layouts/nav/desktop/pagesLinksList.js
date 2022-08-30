import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

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
        role="listitem"
        color="inherit"
        underline="hover"
        variant="button"
      />
    </Toolbar>
  );
}

export default PagesLinksList;
