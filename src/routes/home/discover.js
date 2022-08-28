import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import Tabs from "../../components/tabs";
import Section from "../../components/section";
import ProductCard from "../../components/productCard";

const getAllFilters = (products = [], type) => {
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
};

function Discover() {
  const products = useSelector((state) => state.products);

  const filterKeys = getAllFilters(products, "keys");
  const filterValues = getAllFilters(products, "values");

  return (
    <Section title="Discover" aria-label="Discover Products">
      {products && (
        <Tabs
          tabLabels={filterKeys}
          tabPanels={filterKeys.map((filterKey, i) =>
            filterValues[i].map((product) => (
              <Grid item key={product.id}>
                <ProductCard product={product} badgeType={filterKey} />
              </Grid>
            ))
          )}
          tabsProps={{
            sx: {
              mx: "auto",
              borderBottom: 1,
              borderColor: "divider",
              width: "fit-content",
            },
          }}
          panelProps={{ grid: true }}
        />
      )}
    </Section>
  );
}

export default Discover;
