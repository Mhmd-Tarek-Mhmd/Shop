import { useDocumentTitle } from "../hooks";

import { Hero, Discover, Features, Newsletter } from "../containers/home";

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
