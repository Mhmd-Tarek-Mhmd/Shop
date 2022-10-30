import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";

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

  return (
    <Section title="Discover" aria-label="Discover Products">
      {products && products.length ? (
        <Tabs
          tabLabels={getAllFilters(products, "keys")}
          tabPanels={getAllFilters(products, "keys").map((filterKey, i) =>
            getAllFilters(products, "values")[i].map((product) => (
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
      ) : (
        <Alert
          severity="error"
          sx={{ mx: "auto", width: "50%", minWidth: 200 }}
        >
          Bad or no internet connection.
        </Alert>
      )}
    </Section>
  );
}

export default Discover;
