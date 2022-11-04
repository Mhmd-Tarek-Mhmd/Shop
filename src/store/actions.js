import { toggleTheme } from "./slices/theme";
import { getProducts } from "./slices/products";
import { openAlert, closeAlert } from "./slices/alert";
import { add, clear, update } from "./slices/authedUser";
import { openBackdrop, closeBackdrop } from "./slices/backdrop";
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
  add,
  clear,
  update,
  openAlert,
  closeAlert,
  toggleTheme,
  getProducts,
  openBackdrop,
  closeBackdrop,
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
