import {
  createSlice,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";

const initialState = sessionStorage.authedUser
  ? JSON.parse(sessionStorage.authedUser)
  : null;

const userFormat = ({
  providerId,
  user: { uid, displayName, email, emailVerified, photoURL },
}) => ({
  uid,
  providerId,
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
    update: (state, action) => Object.assign(state, action.payload),
    clear: () => null,
  },
});

export default authedUserSlice.reducer;
export const { add, update, clear } = authedUserSlice.actions;

export const authedUserMiddleware = createListenerMiddleware();
authedUserMiddleware.startListening({
  matcher: isAnyOf(add, update),
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
