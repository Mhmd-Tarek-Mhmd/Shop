import { useLayoutEffect, useRef } from "preact/hooks";
import { useThemeColors } from "../../hooks";

import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import { visuallyHidden } from "@mui/utils";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Filters({ productsData, setProducts, setIsFilter }) {
  const categories = [
    ...new Set(productsData.map((product) => product.category)),
  ].sort();
  const maxPrice = Math.max(...productsData.map((product) => product.price));

  const ref = useRef(null);

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
        mt: { md: "100px" },
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
        <Category
          categories={categories}
          value={ref?.current?.category?.value}
        />
        <Price maxPrice={maxPrice} handleFilter={handleFilter} />
      </Box>
    </Box>
  );
}

export default Filters;

const Search = () => (
  <label>
    <span style={visuallyHidden}>Search by product name</span>
    <TextField fullWidth name="search" type="search" placeholder="Search..." />
  </label>
);

const Category = ({ categories, value }) => (
  <Fieldset title="Categories">
    <RadioGroup name="categories" value={value || ""}>
      <RadioInput name="category" label="All" value="" defaultChecked />
      {categories.map((category) => (
        <RadioInput name="category" label={category} value={category} />
      ))}
    </RadioGroup>
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
  <FormControlLabel label={label} control={<Radio size="small" {...props} />} />
);
