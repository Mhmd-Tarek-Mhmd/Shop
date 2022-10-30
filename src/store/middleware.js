import { cartMiddleware } from "./slices/cart";

const middleware = [cartMiddleware.middleware];

export default middleware;
