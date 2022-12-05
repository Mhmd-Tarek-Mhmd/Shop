import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Tabs from "../../../components/tabs";

function Info({ information, reviews }) {
  return (
    <Tabs
      tabLabels={[
        "Information",
        reviews.length
          ? `Reviews (${reviews.length})`
          : "Reviews",
      ]}
      tabPanels={[
        <Panel
          key={0}
          arr={information}
        />,
        <Panel
          key={1}
          arr={reviews}
          fallbackLabel="No reviews availble"
          sx={{ listStyle: "none" }}
        />,
      ]}
    />
  );
}

export default Info;

const Panel = ({ arr, fallbackLabel, ...props }) => (
  <Box component="ul" {...props}>
    {arr.length ? (
      arr.map((item) => <li key={item}>{item}</li>)
    ) : (
      <Typography
        sx={{
          textAlign: "center",
          color: ({ palette }) => palette.text.secondary,
        }}
      >
        {fallbackLabel}
      </Typography>
    )}
  </Box>
);
