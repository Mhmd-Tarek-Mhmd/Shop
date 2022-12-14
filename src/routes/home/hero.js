import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const getPath = (n) => `../../assets/images/hero/${n}.jpg`;
const options = {
  type: "loop",
  autoplay: true,
  cover: true,
  drag: false,
  arrows: false,
  pagination: false,
  height: "100vh",
  fixedHeight: "100vh",
};

function Hero() {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        "&::before": {
          inset: 0,
          zIndex: 1,
          content: "''",
          position: "absolute",
          bgcolor: "rgba(0, 0, 0, 0.5)",
        },
        ".splide__slide": { minHeight: 500 },
      }}
    >
      <Splide options={options} aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <SplideSlide key={n}>
            <img src={getPath(n)} alt="" />
          </SplideSlide>
        ))}
      </Splide>

      <Box
        sx={{
          zIndex: 1,
          top: "50%",
          left: "50%",
          width: "80%",
          textAlign: "center",
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          color="aliceblue"
          sx={{
            mb: 3,
          }}
        >
          A{" "}
          <Typography
            component="span"
            color="secondary"
            sx={{
              font: "inherit",
              filter: "drop-shadow(0px 2px 4px rgb(0 0 0 / 20%))",
            }}
          >
            Shop
          </Typography>
          <br />
          in your pocket
        </Typography>
        <Button href="/products" variant="contained" color="secondary">
          Explore
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
