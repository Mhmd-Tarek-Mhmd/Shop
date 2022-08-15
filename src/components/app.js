import { useMemo } from "preact/compat";
import { useSelector } from "react-redux";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Nav from "../layouts/nav";

function App() {
  const themeState = useSelector((state) => state.theme);
  const theme = useMemo(
    () => createTheme({ palette: { mode: themeState } }),
    [themeState]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
    </ThemeProvider>
  );
}

export default App;
