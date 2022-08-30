import { Splide, SplideSlide } from "@splidejs/react-splide";

import Section from "../../components/section";
import ProductCard from "../../components/productCard";

const options = {
  type: "loop",
  perPage: 3,
  drag: true,
  gap: "1rem",
  wheel: true,
  autoplay: true,
  focus: "center",
  height: 300,
  autoWidth: true,
  padding: "5rem",
  pagination: false,
};

function Related({ relatedProducts }) {
  return (
    <Section title="Related Project">
      <Splide options={options}>
        {relatedProducts.map((product) => (
          <SplideSlide key={product.id}>
            <ProductCard product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </Section>
  );
}

export default Related;
