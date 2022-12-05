import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProducts as getAll } from "../../firebase";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => await getAll()
);

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    updateProduct: (state, { payload }) =>
      state.map((p) => (p.id === payload.id ? payload : p)),
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { updateProduct } = productsSlice.actions;
