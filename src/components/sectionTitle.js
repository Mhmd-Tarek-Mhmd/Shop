import Typography from "@mui/material/Typography";

function SectionTitle({ title, sx, children }) {
  return (
    <Typography
      component="h2"
      sx={Object.assign(
        {
          mb: 4,
          textAlign: "center",
          letterSpacing: "-3px",
          textTransform: "uppercase",
          font: "800 40px/1 sans-serif",
        },
        sx
      )}
    >
      {title ? title : children}
    </Typography>
  );
}

export default SectionTitle;
