import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import middleware from "./middleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["products", "cart", "wishlist", "authedUser"],
        ignoredActions: [
          "products/getProducts/fulfilled",
          "wishlist/addWishlistItem",
          "products/updateProduct",
          "cart/addCartItem",
          "authedUser/add",
        ],
      },
    }).prepend(middleware),
});

export default store;
