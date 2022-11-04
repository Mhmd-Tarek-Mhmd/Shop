import cartReducer from "./slices/cart";
import alertReducer from "./slices/alert";
import themeReducer from "./slices/theme";
import backdropReducer from "./slices/backdrop";
import wishlistReducer from "./slices/wishlist";
import productsReducer from "./slices/products";
import authedUserSlice from "./Reducer/authedUser";

const reducer = {
  cart: cartReducer,
  alert: alertReducer,
  theme: themeReducer,
  backdrop: backdropReducer,
  wishlist: wishlistReducer,
  products: productsReducer,
  authedUser: authedUserSlice,
};

export default reducer;
