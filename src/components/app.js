import { useMemo, useEffect } from "preact/compat";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { getProducts } from "../store/actions";

import Nav from "../layouts/nav";
import Feedback from "./feedback";
import Main from "../layouts/main";
import Footer from "../layouts/footer";

function App() {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme);
  const theme = useMemo(
    () => createTheme({ palette: { mode: themeState } }),
    [themeState]
  );

  useEffect(() => dispatch(getProducts()), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
        <Nav />
        <Main />
        <Footer />
      </Box>
      <Feedback />
    </ThemeProvider>
  );
}

export default App;
