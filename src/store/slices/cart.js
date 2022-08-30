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
    setQuantity: (state, { payload: { id, quantity } }) =>
      state.map((item) =>
        item.id !== id ? item : Object.assign({}, item, { quantity })
      ),
    increaseQuantity: (state, action) =>
      state.map((item) =>
        item.id !== action.payload
          ? item
          : Object.assign({}, item, { quantity: item.quantity + 1 })
      ),
    decreaseQuantity: (state, action) =>
      state.map((item) =>
        item.id !== action.payload
          ? item
          : Object.assign({}, item, { quantity: item.quantity - 1 })
      ),
  },
});

export default cartSlice.reducer;
export const {
  addCartItem,
  removeCartItem,
  resetCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
