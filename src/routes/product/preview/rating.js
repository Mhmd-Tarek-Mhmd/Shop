import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Rating({ rating }) {
  return (
    <Box
      sx={{
        color: "#ff9529",
        minHeight: 36,
        display: "flex",
        alignItems: "center",
      }}
      aria-label={`This product has ${rating.rate} stars of 5`}
    >
      {[...Array(5)].map((n, i) => {
        if (rating.rate >= i + 1) return <StarRateIcon fontSize="small" />;

        if (rating.rate < i + 1) {
          return Math.floor(rating.rate) === i ? (
            <FractionStarIcon rate={rating.rate} />
          ) : (
            <StarOutlineIcon fontSize="small" />
          );
        }
      })}

      <Typography
        component="span"
        sx={{
          ml: 1,
          fontSize: 12,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        ({rating.count} Rate)
      </Typography>
    </Box>
  );
}

export default Rating;

const FractionStarIcon = ({ rate }) => {
  const fraction = rate - Math.floor(rate);

  if (fraction < 0.3) return <StarOutlineIcon fontSize="small" />;
  if ((fraction >= 0.3) & (fraction <= 0.7))
    return <StarHalfIcon fontSize="small" />;
  if (fraction > 0.7) return <StarRateIcon fontSize="small" />;
};
