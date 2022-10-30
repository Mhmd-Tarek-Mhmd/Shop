import { useDocumentTitle } from "../../hooks";

import Hero from "./hero";
import Discover from "./discover";
import Features from "./features";
import Newsletter from "./newsletter.js";

import "@splidejs/react-splide/dist/css/splide-core.min.css";

function Home() {
  useDocumentTitle("Home");

  return (
    <>
      <Hero />
      <Discover />
      <Features />
      <Newsletter />
    </>
  );
}

export default Home;
