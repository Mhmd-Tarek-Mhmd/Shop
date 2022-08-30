import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ImageWithFallback from "../../components/imageWithFallback";
import { QuantityCounter, RemoveCart } from "../../components/cartActions";

function Item({ item }) {
  return (
    <li>
      <Toolbar
        disableGutters
        component="article"
        sx={{ py: 1, justifyContent: "space-between", overflowX: "auto" }}
      >
        <Toolbar disableGutters>
          <ImageWithFallback
            width="48"
            height="48"
            src={item.images[0]}
            alt={item.title}
          />
          <Typography
            component="h3"
            sx={{
              ml: 2,
              fontSize: "1rem",
              maxWidth: { xs: 100, sm: 150, md: 250 },
              minWidth: { xs: 100, sm: 150, md: 250 },
              maxHeight: 48,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.title}
          </Typography>
        </Toolbar>

        <Typography sx={{ mx: 2 }}>{item.total}$</Typography>

        <Toolbar disableGutters>
          <QuantityCounter id={item.id} />
          <RemoveCart id={item.id} />
        </Toolbar>
      </Toolbar>
    </li>
  );
}

export default Item;
