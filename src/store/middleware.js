import { cartMiddleware } from "./slices/cart";
import { wishlistMiddleware } from "./slices/wishlist";

const middleware = [cartMiddleware.middleware, wishlistMiddleware.middleware];

export default middleware;
