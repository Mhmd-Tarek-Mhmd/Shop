import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import middleware from "./middleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["products", "cart", "wishlist"],
        ignoredActions: [
          "products/getProducts/fulfilled",
          "wishlist/addWishlistItem",
          "cart/addCartItem",
        ],
      },
    }).prepend(middleware),
});

export default store;
