import { useSelector } from "react-redux";
import { useDocumentTitle } from "../../hooks";
import { useState, useEffect } from "preact/hooks";

import Filters from "./filters";
import ProductsGrid from "./ProductsGrid";

function Products() {
  useDocumentTitle("Products");
  const [products, setProducts] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const productsData = useSelector((state) => state.products);

  useEffect(() => {
    productsData && setProducts(productsData);
  }, [productsData]);

  return (
    <>
      <Filters
        setIsFilter={setIsFilter}
        setProducts={setProducts}
        productsData={productsData}
      />
      {products && <ProductsGrid products={products} isFilter={isFilter} />}
    </>
  );
}

export default Products;
