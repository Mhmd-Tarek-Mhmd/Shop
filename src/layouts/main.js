import Box from "@mui/material/Box";

import Routes from "../routes";

function Main() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: {
          xs: "calc(100% - (56px + 140.02px))",
          sm: "calc(100% - (64px + 148.02px))",
        },
      }}
    >
      <Routes />
    </Box>
  );
}

export default Main;
