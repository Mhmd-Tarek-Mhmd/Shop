import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks";
import { useState, useEffect } from "preact/hooks";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import Filters from "./filters";
import ProductsGrid from "./ProductsGrid";
import Section from "../../components/section";

function Products() {
  useDocumentTitle("Products");
  const [products, setProducts] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const productsData = useSelector((state) => state.products);

  useEffect(() => {
    productsData && setProducts(productsData);
  }, [productsData]);

  return (
    <Section
      component="div"
      role="region"
      sx={{ py: 0, display: { md: "flex" } }}
    >
      {productsData ? (
        <>
          <Filters
            setIsFilter={setIsFilter}
            setProducts={setProducts}
            productsData={productsData}
          />
          {products && <ProductsGrid products={products} isFilter={isFilter} />}
        </>
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
