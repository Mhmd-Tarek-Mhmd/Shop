import cartReducer from "./slices/cart";
import themeReducer from "./slices/theme";
import productsReducer from "./slices/products";

const reducer = {
  cart: cartReducer,
  theme: themeReducer,
  products: productsReducer,
};

export default reducer;
