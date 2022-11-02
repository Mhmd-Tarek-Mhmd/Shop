import { createSlice, createListenerMiddleware } from "@reduxjs/toolkit";

const initialState = sessionStorage.authedUser
  ? JSON.parse(sessionStorage.authedUser)
  : null;

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
    clear: () => null,
  },
});

export default authedUserSlice.reducer;
export const { add, clear } = authedUserSlice.actions;

export const authedUserMiddleware = createListenerMiddleware();
authedUserMiddleware.startListening({
  actionCreator: add,
  effect: (action, listener) => {
    sessionStorage.setItem(
      "authedUser",
      JSON.stringify(listener.getState().authedUser)
    );
  },
});
authedUserMiddleware.startListening({
  actionCreator: clear,
  effect: () => sessionStorage.removeItem("authedUser"),
});
