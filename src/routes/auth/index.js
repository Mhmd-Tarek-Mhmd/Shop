import { route } from "preact-router";
import Match from "preact-router/Match";
import { useLayoutEffect } from "preact/hooks";

import SignUp from "./signUp";
import SignIn from "./signIn";

const paths = ["/auth/sign-up", "/auth/sign-in"];

function Auth() {
  useLayoutEffect(() => {
    if (!paths.includes(location.pathname)) route("/auth/sign-up");
  }, [location.pathname]);

  return (
    <Match path="/auth/:rest*">
      {({ matches, path, url }) =>
        url.includes("sign-up") ? <SignUp /> : <SignIn />
      }
    </Match>
  );
}

export default Auth;
