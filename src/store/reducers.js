import cartReducer from "./slices/cart";
import themeReducer from "./slices/theme";
import wishlistReducer from "./slices/wishlist";
import productsReducer from "./slices/products";

const reducer = {
  cart: cartReducer,
  theme: themeReducer,
  wishlist: wishlistReducer,
  products: productsReducer,
};

export default reducer;
