import Router from "preact-router";

import Home from "./home";
import Product from "./product";
import Products from "./products";
import Checkout from "./checkout";
import Cart from "./cart";
import WishList from "./wishList";

function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Cart path="/cart" />
      <Products path="/products" />
      <Checkout path="/checkout" />
      <WishList path="/wishlist" />
      <Product path="/product/:id" />
    </Router>
  );
}

export default Routes;
