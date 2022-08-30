import { useSelector } from "react-redux";

import { Fragment } from "preact";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

function Review({ titles }) {
  const products = useSelector((state) => state.cart);

  return (
    <>
      <Typography variant="h6" component="h3" gutterBottom>
        {titles[0]}
      </Typography>

      <List disablePadding>
        {products.length ? (
          <>
            {products.map((product) => (
              <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={product.title} />
                <Typography variant="body2">{product.total}</Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {products
                  .map((item) => item.total)
                  .reduce((a, b) => a + b)
                  .toFixed(2)}
                $
              </Typography>
            </ListItem>
          </>
        ) : (
          <ListItem>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              No products found
            </Typography>
          </ListItem>
        )}
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
            {titles[1]}
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>

        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
            {titles[2]}
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Review;
