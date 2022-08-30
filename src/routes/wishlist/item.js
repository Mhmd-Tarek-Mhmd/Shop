import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { AddCart } from "../../components/cartActions";
import { RemoveWishlist } from "../../components/wishlistActions";
import ImageWithFallback from "../../components/imageWithFallback";

function Item({ item }) {
	return (
		<li>
			<Toolbar component="article" sx={{ py: 1, justifyContent: "space-between" }}>
				<Toolbar disableGutters>
					<ImageWithFallback width="48" height="48" src={item.images[0]} alt={item.title} />
					<Typography component="h3" sx={{ fontSize: "1rem", ml: 2 }}>
						{item.title}
					</Typography>
				</Toolbar>

				<Toolbar disableGutters>
					<AddCart product={Object.assign({}, item, { quantity: 1 })} />
					<RemoveWishlist id={item.id} />
				</Toolbar>
			</Toolbar>
		</li>
	);
}

export default Item;
