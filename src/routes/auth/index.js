import Route, { route } from "preact-router";
import { useLayoutEffect } from "preact/hooks";

import SignUp from "./signUp";
import SignIn from "./signIn";

const paths = ["/auth/sign-up", "/auth/sign-in"];

function Auth() {
  useLayoutEffect(() => {
    if (!paths.includes(location.pathname)) route("/auth/sign-up");
  }, [location.pathname]);

  return (
    <Route>
      <SignUp path="auth/sign-up" />
      <SignIn path="auth/sign-in" />
    </Route>
  );
}

export default Auth;
