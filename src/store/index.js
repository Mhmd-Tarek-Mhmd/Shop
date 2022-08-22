import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";

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
    }),
});

export default store;
