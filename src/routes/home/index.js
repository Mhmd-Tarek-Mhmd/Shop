import { useEffect } from "preact/hooks";

import Hero from "./hero";
import Discover from "./discover";
import Features from "./features";
import Newsletter from "./newsletter.js";

import "@splidejs/react-splide/dist/css/splide-core.min.css";

function Home() {
  useEffect(() => {
    document.title = "Home - Shop";
  }, []);

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
