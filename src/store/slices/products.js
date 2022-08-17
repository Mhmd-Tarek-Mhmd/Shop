import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getProducts as getAll } from "../../firebase";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => await getAll()
);

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default productsSlice.reducer;
