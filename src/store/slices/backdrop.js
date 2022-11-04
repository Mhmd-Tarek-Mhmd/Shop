import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    openBackdrop: () => ({ isOpen: true }),
    closeBackdrop: () => initialState,
  },
});

export default backdropSlice.reducer;
export const { openBackdrop, closeBackdrop } = backdropSlice.actions;
