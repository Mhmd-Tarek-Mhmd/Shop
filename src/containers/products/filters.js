import { useLayoutEffect, useRef } from "preact/hooks";
import { useThemeColors } from "../../hooks";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { visuallyHidden } from "@mui/utils";

function Filters({ productsData, setProducts, setIsFilter }) {
  const categories = [
    ...new Set(productsData.map((product) => product.category)),
  ].sort();
  const maxPrice = Math.max(...productsData.map((product) => product.price));

  const ref = useRef(null);
  const grey = useThemeColors("grey", "hex", 200, 800);

  const handleFilter = () => {
    setIsFilter(true);
    let filteredData = productsData;
    const { category, price, search } = ref.current;

    // [1] Category
    const checkedVal = category.value;
    const categoryArr = productsData.filter(
      (product) => product.category === checkedVal
    );
    if (categoryArr.length) filteredData = categoryArr;

    // [2] Price
    const priceVal = +price.value;
    filteredData = filteredData.filter((product) => product.price <= priceVal);

    // [3] Search
    const searchVal = search.value;
    filteredData = filteredData.filter((product) =>
      product.title.toLowerCase().startsWith(searchVal.toLowerCase())
    );

    // setting data...
    setProducts(filteredData);
    !checkedVal && !searchVal && setIsFilter(false);
  };

  return (
    <Box
      component="aside"
      sx={{
        px: 2,
        py: 6.25,
        width: { md: 300 },
        backgroundColor: grey,
        boxShadow: "0 1px 0 rgb(0 0 0 / 8%)",
        overflowX: "hidden",
      }}
    >
      <Box
        ref={ref}
        component="form"
        role="search"
        onSubmit={(e) => e.preventDefault()}
        onInput={handleFilter}
        sx={{ display: "grid", rowGap: 6.25 }}
      >
        <Search />
        <Category categories={categories} />
        <Price maxPrice={maxPrice} handleFilter={handleFilter} />
      </Box>
    </Box>
  );
}

export default Filters;

const Search = () => (
  <label>
    <span style={visuallyHidden}>Search by product name</span>
    <Box
      component="input"
      name="search"
      type="search"
      placeholder="Search..."
      sx={{ font: "inherit", p: 1.5, width: "100%", border: "none" }}
    />
  </label>
);

const Category = ({ categories }) => (
  <Fieldset title="Categories">
    <RadioInput name="category" label="All" value="" defaultChecked />
    {categories.map((category) => (
      <RadioInput name="category" label={category} value={category} />
    ))}
  </Fieldset>
);

const Price = ({ maxPrice, handleFilter }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref) ref.current.children[2].firstChild.name = "price";
  }, [ref]);

  return (
    <Fieldset title="Price">
      <Slider
        ref={ref}
        max={maxPrice}
        defaultValue={maxPrice}
        valueLabelDisplay="auto"
        onChangeCommitted={handleFilter}
        valueLabelFormat={(val) => `$${val}`}
        getAriaValueText={(val) => `$${val}`}
        getAriaLabel={() => "Set your price range"}
      />
    </Fieldset>
  );
};

const Fieldset = ({ title, children }) => (
  <Box
    component="fieldset"
    sx={{
      border: "none",
      display: { xs: "flex", md: "grid" },
      flexWrap: "wrap",
      columnGap: 1.5,
    }}
  >
    <Box component="legend" sx={{ fontWeight: 700, fontSize: "1.2rem", mb: 1 }}>
      {title}
    </Box>

    {children}
  </Box>
);

const RadioInput = ({ label, ...props }) => (
  <Box
    component="label"
    sx={{ display: "flex", alignItems: "center", columnGap: 0.5 }}
  >
    <input type="radio" {...props} />
    <span>{label}</span>
  </Box>
);
