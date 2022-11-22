import Router from "preact-router";

import Home from "./home";
import Auth from "./auth";
import Cart from "./cart";
import Product from "./product";
import Profile from "./profile";
import Products from "./products";
import Checkout from "./checkout";
import WishList from "./wishList";
import NotFound from "./notFound";
import Settings from "./settings";

function Routes() {
  return (
    <Router>
      <Home path="/" />
      <NotFound default />
      <Cart path="/cart" />
      <Profile path="/me" />
      <Auth path="/auth/:rest*" />
      <Products path="/products" />
      <Checkout path="/checkout" />
      <WishList path="/wishlist" />
      <Settings path="/settings" />
      <Product path="/product/:id" />
    </Router>
  );
}

export default Routes;
