import Grid from "@mui/material/Grid";

function TabPanel({ children, value, index, ...props }) {
  return (
    <Grid
      container
      spacing={2}
      role="tabpanel"
      hidden={value !== index}
      sx={{ pt: 3, justifyContent: "center" }}
      {...props}
    >
      {value === index && children}
    </Grid>
  );
}

export default TabPanel;
