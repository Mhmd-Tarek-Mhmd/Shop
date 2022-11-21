import { googleAuth } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";

import GoogleButton from "../../components/googleButton";

function GoogleAuthButton({ prefix, successCB, getSuccessMsg }) {
  const googleAuthHook = useFireAuthRedux(googleAuth);

  const handleAuth = () => {
    const getErrorMsg = (error) =>
      error.code === "auth/internal-error" && "Check your internet connection";
    googleAuthHook(
      [],
      [],
      { cb: successCB, getMsg: getSuccessMsg },
      { getMsg: getErrorMsg }
    );
  };

  return <GoogleButton verbTxt={`Sign ${prefix}`} onClick={handleAuth} />;
}

export default GoogleAuthButton;
