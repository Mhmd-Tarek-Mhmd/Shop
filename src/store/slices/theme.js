import { createSlice } from "@reduxjs/toolkit";

const isLightTheme = matchMedia("(prefers-color-scheme: light)").matches;

const initialState = isLightTheme ? "light" : "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
