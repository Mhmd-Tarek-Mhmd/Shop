import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        fontWeight: 700,
        color: "inherit",
        fontSize: 26,
        fontFamily: "monospace",
        letterSpacing: ".1rem",
        textDecoration: "none",
      }}
    >
      Shop
    </Typography>
  );
}

export default Logo;
