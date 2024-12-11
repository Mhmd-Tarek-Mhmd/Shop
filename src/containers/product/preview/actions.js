import { useThemeColors } from "../../../hooks";

import Toolbar from "@mui/material/Toolbar";

import { AddCart } from "../../../components/cartActions";
import { AddWishlist } from "../../../components/wishlistActions";

function Actions({ product }) {
  const primary = useThemeColors("primary", "rgb");

  return (
    <Toolbar disableGutters>
      <AddCart form product={product} />
      <AddWishlist
        product={product}
        sx={{
          ml: 1,
          width: 36.5,
          height: 36.5,
          borderRadius: 1,
          border: `1px solid rgba(${primary}, 0.5)`,
          color: (theme) => (theme.mode === "light" ? "#6888b4" : "#8794be"),
        }}
      />
    </Toolbar>
  );
}

export default Actions;
