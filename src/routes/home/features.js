import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PublicIcon from "@mui/icons-material/Public";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const getColor = (theme, color) =>
  theme.palette.mode === "light"
    ? theme.palette[color].main
    : theme.palette[color].dark;

function Features() {
  return (
    <Box
      aria-label="Features"
      role="region"
      sx={{
        color: "#fff",
        height: "230px",
        textAlign: "center",
        alignItems: "center",
        display: { md: "flex" },
        bgcolor: (theme) => getColor(theme, "secondary"),
      }}
    >
      <FeatureContainer>
        {(isMidBreakpoint) => (
          <>
            <Feature
              Icon={PublicIcon}
              title="Free shipping"
              subtitle="Free worldwide shipping and returns - customs and duties taxes included."
              isMidBreakpoint={isMidBreakpoint}
            />
            <Feature
              Icon={HeadphonesIcon}
              title="Customer Service"
              subtitle="We are available from monday to friday to answer your questions."
              isMidBreakpoint={isMidBreakpoint}
            />
            <Feature
              Icon={CreditCardIcon}
              title="Secure Payment"
              subtitle="Your payment information is processed securely."
              isMidBreakpoint={isMidBreakpoint}
            />
          </>
        )}
      </FeatureContainer>
    </Box>
  );
}

export default Features;

// Feature

function Feature({ Icon, title, subtitle, isMidBreakpoint }) {
  const id = `feature-${Math.random() * Math.random()}`;

  return isMidBreakpoint ? (
    <Box component="article" aria-labelledby={id}>
      <FeatureContent Icon={Icon} title={title} subtitle={subtitle} id={id} />
    </Box>
  ) : (
    <SplideSlide tag="article" aria-labelledby={id}>
      <FeatureContent Icon={Icon} title={title} subtitle={subtitle} id={id} />
    </SplideSlide>
  );
}
function FeatureContent({ Icon, title, subtitle, id }) {
  return (
    <>
      <Icon />
      <Typography
        variant="h6"
        component="h3"
        sx={{ my: 2, textTransform: "uppercase" }}
        id={id}
      >
        {title}
      </Typography>
      <Typography>{subtitle}</Typography>
    </>
  );
}

// FeatureContainer

const options = {
  type: "loop",
  autoplay: true,
  arrows: false,
  drag: true,
};
const paginationStyles = {
  ".splide__pagination": {
    p: 0,
    m: 0,
    top: "20px",
    position: "relative",
  },
  ".splide__pagination__page": {
    padding: 0,
    opacity: 0.7,
    width: "8px",
    height: "8px",
    margin: "3px",
    border: "none",
    cursor: "pointer",
    background: "#ccc",
    borderRadius: "50%",
    position: "relative",
    display: "inline-block",
    transition: "transform .2s linear",
    color: (theme) => getColor(theme, "primary"),
    "&:hover": {
      opacity: 0.9,
    },
    "&:focus-visible": {
      outlineOffset: "3px",
      outline: "3px solid currentcolor",
    },
  },
  ".splide__pagination__page.is-active": {
    zIndex: 1,
    transform: "scale(1.4)",
    background: "currentcolor",
  },
};
function FeatureContainer(props) {
  const theme = useTheme();
  const isMidBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={Object.assign(
        {
          position: "relative",
          display: { md: "grid" },
          top: { xs: "44px", md: 0 },
          gridTemplateColumns: "repeat(3, 1fr)",
        },
        paginationStyles
      )}
    >
      {isMidBreakpoint ? (
        props.children(isMidBreakpoint)
      ) : (
        <Splide options={options}>{props.children(isMidBreakpoint)}</Splide>
      )}
    </Box>
  );
}
