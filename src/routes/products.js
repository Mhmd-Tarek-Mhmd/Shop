import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks";

import Alert from "@mui/material/Alert";

import Section from "../components/section";
import ProductsGrid from "../containers/products";

function Products() {
  useDocumentTitle("Products");
  const productsData = useSelector((state) => state.products);

  return (
    <Section
      component="div"
      role="region"
      sx={{ py: 0, display: { md: "flex" } }}
    >
      {productsData ? (
        <ProductsGrid />
      ) : (
        <Alert
          severity="error"
          sx={{ mx: "auto", width: "50%", minWidth: 200, my: 80 }}
        >
          Bad or no internet connection.
        </Alert>
      )}
    </Section>
  );
}

export default Products;
