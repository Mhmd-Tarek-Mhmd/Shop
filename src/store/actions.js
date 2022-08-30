import { toggleTheme } from "./slices/theme";
import { getProducts } from "./slices/products";
import {
  addCartItem,
  removeCartItem,
  resetCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
} from "./slices/cart";
import {
  addWishlistItem,
  removeWishlistItem,
  resetWishlist,
} from "./slices/wishlist";

export {
  toggleTheme,
  getProducts,
  addCartItem,
  removeCartItem,
  resetCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
  addWishlistItem,
  removeWishlistItem,
  resetWishlist,
};
