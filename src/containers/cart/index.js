import { Fragment } from "preact";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Item from "./item";
import { ResetCart } from "../../components/cartActions";

function ItemList({ cart }) {
  return (
    <Card sx={{ pb: 1, maxWidth: 700, mx: "auto" }}>
      <CardContent component="ul" sx={{ listStyle: "none", m: 0 }}>
        {cart.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
            <Divider />
          </Fragment>
        ))}
        <Total total={cart.map((item) => item.total)} />
      </CardContent>

      <CardActions sx={{ gap: 1 }}>
        <ResetCart sx={{ flex: 1 }} />
        <Button variant="outlined" href="/checkout" sx={{ flex: 1 }}>
          Checkout
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemList;

function Total({ total }) {
  return (
    <Toolbar
      disableGutters
      component="li"
      sx={{ justifyContent: "space-between" }}
    >
      <Typography variant="h6" component="h4">
        Total
      </Typography>
      <Typography>{total.reduce((a, b) => a + b).toFixed(2)}$</Typography>
    </Toolbar>
  );
}
