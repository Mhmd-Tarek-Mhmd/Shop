import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Tabs from "../../../components/tabs";

function Info({ information }) {
  return (
    <Tabs
      tabLabels={[
        "Information",
        information.reviews.length
          ? `Reviews (${information.reviews.length})`
          : "Reviews",
      ]}
      tabPanels={[
        <Panel
          key={0}
          arr={information.info}
          fallbackLabel="No information availble"
        />,
        <Panel
          key={1}
          arr={information.reviews}
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
