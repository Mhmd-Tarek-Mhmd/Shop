import { useThemeColors } from "../../../hooks";
import { useRef, useEffect } from "preact/hooks";

import Box from "@mui/material/Box";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import ImageWithFallback from "../../../components/imageWithFallback";

const generateSlides = (product) => {
  const errorCb = (img) => {
    img.parentElement.style.backgroundImage = `url(${img.src})`;
  };

  return product.images.map((image) => (
    <SplideSlide key={product.id}>
      <ImageWithFallback src={image} alt={product.title} errorCb={errorCb} />
    </SplideSlide>
  ));
};

const sliderOptions = {
  type: "fade",
  cover: true,
  arrows: false,
  pagination: false,
  width: 400,
  height: 300,
  fixedWidth: 400,
  fixedHeight: 300,
  breakpoints: {
    599: {
      width: 300,
      fixedWidth: 300,
    },
  },
};
const paginationOptions = {
  gap: 6,
  cover: true,
  arrows: false,
  pagination: false,
  isNavigation: true,
  fixedWidth: 94,
  fixedHeight: 94,
  breakpoints: {
    599: {
      fixedWidth: 54,
      fixedHeight: 54,
    },
  },
};

function Images({ product }) {
  const slider = useRef();
  const pagination = useRef();
  const primary = useThemeColors("primary");

  useEffect(() => {
    slider.current.sync(pagination.current.splide);
  }, []);

  return (
    <Box
      sx={{
        ".splide__slide": {
          backgroundSize: "contain !important",
        },
        ".splide__track--nav>.splide__list>.splide__slide.is-active": {
          borderColor: primary,
        },
      }}
    >
      <Splide
        options={sliderOptions}
        ref={slider}
        style={{ marginInline: "auto", marginBottom: ".5rem" }}
      >
        {generateSlides(product)}
      </Splide>
      <Splide options={paginationOptions} ref={pagination}>
        {generateSlides(product)}
      </Splide>
    </Box>
  );
}

export default Images;
