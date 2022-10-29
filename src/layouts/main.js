import Box from "@mui/material/Box";

import Routes from "../routes";

function Main() {
  return (
    <Box component="main" sx={{ minHeight: "calc(100% - (64px + 148.02px))" }}>
      <Routes />
    </Box>
  );
}

export default Main;
