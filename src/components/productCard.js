import { useThemeColors } from "../hooks";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import { AddCart } from "./cartActions";
import { AddWishlist } from "./wishlistActions";
import fallback from "../assets/images/no-preview.png";

const getPriceAfterSale = (price, sale) => {
  const saleCost = (sale * price) / 100;
  return (price - saleCost).toFixed(2);
};

function ProductCard({ product, badgeType }) {
  return (
    <Card
      component="article"
      aria-label={product.title}
      sx={{
        width: 300,
        height: 283,
        display: "grid",
        position: "relative",
      }}
    >
      {badgeType && <CardBadge type={badgeType} />}
      <CardMedia
        key={product.id}
        component="img"
        alt={product.title}
        height="100"
        image={product.thumbnail}
        onError={(e) => (e.target.src = fallback)}
        sx={{ mx: "auto", pt: "15px", width: "auto", maxWidth: "100%" }}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          sx={{
            textOverflow: "ellipsis",
            maxHeight: "4rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
          }}
        >
          {product.description}
        </Typography>
        <Typography>
          {product.discount ? (
            <>
              <ProductPrice old price={product.price} />{" "}
              <ProductPrice
                price={getPriceAfterSale(product.price, product.discount)}
              />
            </>
          ) : (
            <ProductPrice price={product.price} />
          )}
        </Typography>
      </CardContent>

      <CardActions sx={{ alignSelf: "end" }}>
        <AddCart product={product} />
        <AddWishlist product={product} />

        <Button
          href={`/product/${product.id}`}
          aria-label="Show more details about this product"
          sx={{ ml: "auto !important" }}
        >
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

// ProductPrice
const ProductPrice = (props) =>
  props.old ? (
    <del>{props.price}$</del>
  ) : (
    <Box component="span" sx={{ fontWeight: "bold" }}>
      {props.price}$
    </Box>
  );

// CardBadge
function CardBadge({ type }) {
  const error = useThemeColors("error");
  const success = useThemeColors("success");
  const primary = useThemeColors("primary");

  const getColor = () => {
    if (type === "new") return error;
    if (type === "best seller") return primary;
    if (type === "sale") return success;
  };

  const cardBadgeStyles = () => ({
    px: 1,
    py: 0.25,
    top: 10,
    left: 10,
    color: "#fff",
    borderRadius: 0.5,
    position: "absolute",
    textTransform: "uppercase",
    bgcolor: getColor(),
  });

  return (
    <Box aria-hidden="true" sx={cardBadgeStyles}>
      {type}
    </Box>
  );
}
