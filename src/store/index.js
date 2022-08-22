import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["products", "cart"],
        ignoredActions: ["products/getProducts/fulfilled", "cart/addCartItem"],
      },
    }),
});

export default store;
