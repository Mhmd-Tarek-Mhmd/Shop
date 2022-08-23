import { useState } from "preact/hooks";
import { useSelector } from "react-redux";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Grid from "@mui/material/Grid";

import Section from "../../components/section";
import TabPanel from "../../components/TabPanel";
import ProductCard from "../../components/productCard";

const a11yTabProps = (index) => ({
  id: `tab-${index}`,
  "aria-controls": `tabpanel-${index}`,
});
const a11yPanelProps = (index) => ({
  id: `tabpanel-${index}`,
  "aria-labelledby": `tab-${index}`,
});
const getAllFilters = (products, type) => {
  const allFilters = {
    "best seller": products.filter((product, i) => i < 13),
    new: products.filter((product, i) => i > 8),
    sale: products.filter((product) => product.sale),
  };

  if (type === "keys") {
    return Object.keys(allFilters);
  }
  if (type === "values") {
    return Object.values(allFilters);
  }
  return false;
};

function Discover() {
  const [value, setValue] = useState(0);
  const products = useSelector((state) => state.products);

  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <Section title="Discover" aria-label="Discover Products">
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          mx: "auto",
          borderBottom: 1,
          borderColor: "divider",
          width: "fit-content",
        }}
      >
        <Tab label="Best Sellers" {...a11yTabProps} />
        <Tab label="New" {...a11yTabProps} />
        <Tab label="Sale" {...a11yTabProps} />
      </Tabs>

      {products &&
        getAllFilters(products, "keys").map((filterKey, i) => (
          <TabPanel
            key={filterKey}
            {...a11yPanelProps(i)}
            value={value}
            index={i}
          >
            {getAllFilters(products, "values")[i].map((product) => (
              <Grid item key={product.id}>
                <ProductCard product={product} badgeType={filterKey} />
              </Grid>
            ))}
          </TabPanel>
        ))}
    </Section>
  );
}

export default Discover;
