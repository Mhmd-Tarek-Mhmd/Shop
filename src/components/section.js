import Box from "@mui/material/Box";

import SectionTitle from "./sectionTitle";

function Section({ title, ...props }) {
  return (
    <Box component="section" sx={{ py: "60px" }} {...props}>
      {title && <SectionTitle title={title} />}
      {props.children}
    </Box>
  );
}

export default Section;
