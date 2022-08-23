import Typography from "@mui/material/Typography";

function SectionTitle({ title, children }) {
  return (
    <Typography
      component="h2"
      sx={{
        mb: 4,
        textAlign: "center",
        letterSpacing: "-3px",
        textTransform: "uppercase",
        font: "800 40px/1 sans-serif",
      }}
    >
      {title ? title : children}
    </Typography>
  );
}

export default SectionTitle;
