import { toggleTheme } from "./slices/theme";
import { openAlert, closeAlert } from "./slices/alert";
import { add, clear, update } from "./slices/authedUser";
import { getProducts, updateProduct } from "./slices/products";
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
  updateProduct,
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
