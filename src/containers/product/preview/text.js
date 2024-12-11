import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Rating from "./rating";

function Text({ product }) {
  return (
    <>
      <Typography variant="h5" component="h3">
        {product.title}
      </Typography>

      <Rating rating={product.rating} />

      <PriceBox sale={product.discount} price={product.price} />

      <Typography
        sx={{ py: 1, color: ({ palette }) => palette.text.secondary }}
      >
        {product.description}
      </Typography>
    </>
  );
}

export default Text;

const getPriceAfterSale = (price, sale) => {
  const saleCost = (sale * price) / 100;
  return (price - saleCost).toFixed(2);
};

const PriceBox = ({ sale, price }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    {sale ? (
        <>
          <del>{price}$</del>
          <ProductPrice price={getPriceAfterSale(price, sale)} />
        </>
        ) : <ProductPrice price={price} />}
  </Box>
);

const ProductPrice = ({ price }) => (
  <Typography color="primary" variant="h5" component="strong" fontWeight="bold">
    {price}$
  </Typography>
);
