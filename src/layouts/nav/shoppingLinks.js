import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function WishList({ Element, ...props }) {
  return (
    <Tooltip title="Open wishlist" arrow>
      <Element {...props} href="/wishlist">
        <Badge badgeContent={1} color="secondary" variant="dot">
          <FavoriteBorderOutlinedIcon />
        </Badge>
      </Element>
    </Tooltip>
  );
}

function Cart({ Element, ...props }) {
  const cart = useSelector((state) => state.cart);

  return (
    <Tooltip title="Open cart" arrow>
      <Element {...props} href="/cart">
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Element>
    </Tooltip>
  );
}

export { WishList, Cart };
