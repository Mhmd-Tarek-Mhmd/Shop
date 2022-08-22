import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => [...state, action.payload],
    removeCartItem: (state, action) =>
      state.filter((a) => a.id !== action.payload),
    resetCart: () => initialState,
  },
});

export default cartSlice.reducer;
export const { addCartItem, removeCartItem, resetCart } = cartSlice.actions;