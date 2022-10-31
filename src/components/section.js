import Box from "@mui/material/Box";

import SectionTitle from "./sectionTitle";

function Section({ title, sx, ...props }) {
  return (
    <Box component="section" sx={Object.assign({ py: "60px" }, sx)} {...props}>
      {title && <SectionTitle title={title} />}
      {props.children}
    </Box>
  );
}

export default Section;
