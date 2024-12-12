import { useMemo, useEffect } from "preact/compat";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { getProducts } from "./store/actions";

import Routes from "./routes";
import Nav from "./layouts/nav";
import Footer from "./layouts/footer";
import Feedback from "./components/feedback";

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
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes />
        </Box>
        <Footer />
      </Box>
      <Feedback />
    </ThemeProvider>
  );
}

export default App;
