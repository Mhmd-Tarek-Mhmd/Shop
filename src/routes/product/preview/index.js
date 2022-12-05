import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Text from "./text";
import Info from "./info";
import Images from "./images";
import Actions from "./actions";
import Section from "../../../components/section";

function Preview({ product }) {
  return (
    <Section component="div" role="region" aria-label="Product preview">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            pb: "20px",
            gap: { xs: 3, md: 0 },
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Images product={product} />

          <Box sx={{ maxWidth: { md: 400 } }}>
            <Text product={product} />
            <Actions product={product} />
          </Box>
        </Toolbar>

        <Info
          product={product}
          reviews={product.reviews}
          information={[
            `Added At: ${new Date(
              product.createdAt.nanoseconds
            ).toLocaleDateString()}`,
            `Category: ${product.category.replaceAll("-", " ")}`,
            `Discount Percentage: ${product.discount}`,
            `Quantity: ${product.quantity}`,
          ]}
        />
      </Container>
    </Section>
  );
}

export default Preview;
