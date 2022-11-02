import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userFormat = ({ displayName, email, emailVerified, photoURL }) => ({
  displayName,
  email,
  emailVerified,
  photoURL,
});

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    add: (state, action) => userFormat(action.payload),
    clear: () => initialState,
  },
});

export default authedUserSlice.reducer;
export const { add, clear } = authedUserSlice.actions;
