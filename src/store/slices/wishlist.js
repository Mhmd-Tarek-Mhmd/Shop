import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlistItem: (state, action) => [...state, action.payload],
    removeWishlistItem: (state, action) =>
      state.filter((a) => a.id !== action.id),
    resetWishlist: () => initialState,
  },
});

export default wishlistSlice.reducer;
export const { addWishlistItem, removeWishlistItem, resetWishlist } =
  wishlistSlice.actions;
