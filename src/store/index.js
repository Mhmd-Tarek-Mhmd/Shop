import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["products/getProducts/fulfilled"],
        // Ignore these paths in the state
        ignoredPaths: ["products"],
      },
    }),
});

export default store;
