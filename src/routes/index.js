import Router from "preact-router";

import Home from "./home";
import Product from "./product";
import Products from "./products";
import Checkout from "./checkout";
import Cart from "./cart";
import WishList from "./wishList";
import Profile from "./profile";
import Auth from "./auth";

function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Cart path="/cart" />
      <Profile path="/me" />
      <Products path="/products" />
      <Checkout path="/checkout" />
      <WishList path="/wishlist" />
      <Product path="/product/:id" />
      <Auth path="/auth/:rest*" />
    </Router>
  );
}

export default Routes;
