import { useState } from "preact/hooks";
import { useUniqueID } from "../hooks";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";

const a11yTabProps = (id, index) => ({
  id: `tab-${id}-${index}`,
  "aria-controls": `tabpanel-${id}-${index}`,
});
const a11yPanelProps = (id, index) => ({
  id: `tabpanel-${id}-${index}`,
  "aria-labelledby": `tab-${id}-${index}`,
});

function Tabs({ tabLabels, tabPanels, tabsProps, tabProps, panelProps }) {
  const id = useUniqueID();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <>
      <MuiTabs
        value={value}
        onChange={handleChange}
        sx={Object.assign(
          { borderBottom: 1, borderColor: "divider" },
          tabsProps?.sx || {}
        )}
      >
        {tabLabels.map((tabLabel, i) => (
          <MuiTab
            key={i}
            label={tabLabel}
            {...a11yTabProps(id, i)}
            {...tabProps}
          />
        ))}
      </MuiTabs>

      {tabPanels.map((tabPanel, i) => (
        <TabPanel
          key={i}
          index={i}
          value={value}
          {...a11yPanelProps(id, i)}
          {...panelProps}
        >
          {tabPanel}
        </TabPanel>
      ))}
    </>
  );
}

export default Tabs;

// Panel
function Panel({ grid, sx, ...props }) {
  return grid ? (
    <Grid
      container
      spacing={2}
      sx={Object.assign({ pt: 3, justifyContent: "center" }, sx)}
      {...props}
    >
      {props.children}
    </Grid>
  ) : (
    <Box sx={Object.assign({ pt: 3 }, sx)} {...props}>
      {props.children}
    </Box>
  );
}

// TabPanel
function TabPanel({ value, index, ...props }) {
  return (
    <Panel role="tabpanel" hidden={value !== index} {...props}>
      {value === index && props.children}
    </Panel>
  );
}
