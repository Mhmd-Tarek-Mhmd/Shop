import { Fragment } from "preact";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Item from "./item";
import { ResetWishlist } from "../../components/wishlistActions";

function ItemList({ wishlist }) {
  return (
    <Card sx={{ pb: 1, maxWidth: 700, mx: "auto" }}>
      <CardContent component="ul" sx={{ listStyle: "none", m: 0 }}>
        {wishlist.map((item, i) => (
          <Fragment key={item.id}>
            <Item item={item} />
            {i !== wishlist.length - 1 && <Divider />}
          </Fragment>
        ))}
      </CardContent>

      <CardActions>
        <ResetWishlist sx={{ mx: "auto", width: "90%" }} />
      </CardActions>
    </Card>
  );
}

export default ItemList;
