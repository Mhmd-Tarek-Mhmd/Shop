import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";

import ProductCard from "../../components/productCard";
import SectionTitle from "../../components/sectionTitle";

function ProductsGrid({ products, isFilter }) {
  return (
    <Container maxWidth="xl" sx={{ flex: 1, py: "60px" }}>
      <SectionTitle title="Products" sx={{ mb: 6.25 }} />

      {products.length ? (
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {products.map((product) => (
            <Grid
              item
              key={product.key}
              sx={{ ".MuiGrid-item": { maxWidth: "100%" } }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        isFilter && (
          <Alert
            severity="info"
            sx={{ mx: "auto", width: "50%", minWidth: 200 }}
          >
            No products match
          </Alert>
        )
      )}
    </Container>
  );
}

export default ProductsGrid;
