import Box from "@mui/material/Box";

function Main(props) {
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
      {props?.children}
    </Box>
  );
}

export default Main;
