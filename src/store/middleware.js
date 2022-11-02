import { cartMiddleware } from "./slices/cart";
import { wishlistMiddleware } from "./slices/wishlist";
import { authedUserMiddleware } from "./slices/authedUser";

const middleware = [
  cartMiddleware.middleware,
  wishlistMiddleware.middleware,
  authedUserMiddleware.middleware,
];

export default middleware;
