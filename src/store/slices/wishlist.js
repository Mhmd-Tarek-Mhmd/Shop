import {
  createListenerMiddleware,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit";

const initialState = sessionStorage.wishlist
  ? JSON.parse(sessionStorage.wishlist)
  : [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlistItem: (state, action) => [...state, action.payload],
    removeWishlistItem: (state, action) =>
      state.filter((a) => a.id !== action.payload),
    resetWishlist: () => [],
  },
});

export default wishlistSlice.reducer;
export const { addWishlistItem, removeWishlistItem, resetWishlist } =
  wishlistSlice.actions;

export const wishlistMiddleware = createListenerMiddleware();
wishlistMiddleware.startListening({
  matcher: isAnyOf(addWishlistItem, removeWishlistItem),
  effect: (action, listener) => {
    sessionStorage.setItem(
      "wishlist",
      JSON.stringify(listener.getState().wishlist)
    );
  },
});
wishlistMiddleware.startListening({
  actionCreator: resetWishlist,
  effect: () => sessionStorage.removeItem("wishlist"),
});
