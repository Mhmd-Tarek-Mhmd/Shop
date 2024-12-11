import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks";

import { Preview, Related } from "../containers/product";

import("@splidejs/react-splide/dist/css/themes/splide-default.min.css");

const getProduct = (products) => {
  if (products) {
    return products.filter(
      (product) => product.id === location.pathname.slice(9)
    )[0];
  }
};

function Product() {
  const products = useSelector((state) => state.products);
  const product = getProduct(products);
  useDocumentTitle(product ? product.title : "");

  return (
    product && (
      <>
        <Preview product={product} />
        <Related
          relatedProducts={products.filter(
            (prod) =>
              prod.category === product.category && prod.id !== product.id
          )}
        />
      </>
    )
  );
}

export default Product;
