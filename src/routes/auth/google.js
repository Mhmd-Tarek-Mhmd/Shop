import { googleAuth } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";

import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";

function GoogleAuthButton({ prefix, successCB, getSuccessMsg }) {
  const googleAuthHook = useFireAuthRedux(googleAuth);

  const handleAuth = () => {
    const getErrorMsg = (error) => error.code === "auth/internal-error" && "Check your internet connection";
    googleAuthHook(
      [],
      [],
      { cb: successCB, getMsg: getSuccessMsg },
      { getMsg: getErrorMsg }
    );
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      onClick={handleAuth}
      startIcon={<GoogleIcon />}
      sx={{ textTransform: "none" }}
    >
      Sign {prefix} with Google
    </Button>
  );
}

export default GoogleAuthButton;

const GoogleIcon = () => (
  <SvgIcon width="18" height="18" viewBox="0 0 20 20">
    <g fill="none" fill-rule="evenodd">
      <path
        d="M17.6 9.2l-.1-1.8H9v3.4h4.8C13.6 12 13 13 12 13.6v2.2h3a8.8 8.8 0 0 0 2.6-6.6z"
        fill="#4285F4"
        fill-rule="nonzero"
      />
      <path
        d="M9 18c2.4 0 4.5-.8 6-2.2l-3-2.2a5.4 5.4 0 0 1-8-2.9H1V13a9 9 0 0 0 8 5z"
        fill="#34A853"
        fill-rule="nonzero"
      />
      <path
        d="M4 10.7a5.4 5.4 0 0 1 0-3.4V5H1a9 9 0 0 0 0 8l3-2.3z"
        fill="#FBBC05"
        fill-rule="nonzero"
      />
      <path
        d="M9 3.6c1.3 0 2.5.4 3.4 1.3L15 2.3A9 9 0 0 0 1 5l3 2.4a5.4 5.4 0 0 1 5-3.7z"
        fill="#EA4335"
        fill-rule="nonzero"
      />
      <path d="M0 0h18v18H0z" />
    </g>
  </SvgIcon>
);
