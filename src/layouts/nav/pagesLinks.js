const pages = ["home"];

const PagesLinks = ({ Element, ...props }) => {
  return pages.map((page) => (
    <Element key={page} {...props} href={page === "home" ? "/" : `/${page}`}>
      {page}
    </Element>
  ));
};

export default PagesLinks;
