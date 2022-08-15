import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        fontSize: 26,
        color: "inherit",
        fontFamily: "Monoton",
        textDecoration: "none",
      }}
    >
      Shop
    </Typography>
  );
}

export default Logo;
