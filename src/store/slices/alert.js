import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, severity: "", msg: "" };

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    open: (state, action) => action.payload,
    closeAlert: (state) => Object.assign(state, { isOpen: false }),
  },
});

export const openAlert = (severity, msg) => async (dispatch) =>
  await dispatch(alertSlice.actions.open({ isOpen: true, severity, msg }));

export default alertSlice.reducer;
export const { closeAlert } = alertSlice.actions;
