import Toolbar from "@mui/material/Toolbar";

import { AddCart } from "../../../components/cartActions";
import { AddWishlist } from "../../../components/wishlistActions";

function Actions({ product }) {
  return (
    <Toolbar disableGutters sx={{ gap: 1 }}>
      <AddCart form product={product} />
      <AddWishlist product={product} />
    </Toolbar>
  );
}

export default Actions;
