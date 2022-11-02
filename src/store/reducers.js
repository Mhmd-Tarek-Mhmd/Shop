import cartReducer from "./slices/cart";
import themeReducer from "./slices/theme";
import wishlistReducer from "./slices/wishlist";
import productsReducer from "./slices/products";
import authedUserSlice from "./slices/authedUser";

const reducer = {
  cart: cartReducer,
  theme: themeReducer,
  wishlist: wishlistReducer,
  products: productsReducer,
  authedUser: authedUserSlice,
};

export default reducer;
