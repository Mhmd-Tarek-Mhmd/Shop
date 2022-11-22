import { useFireAuthRedux } from "../../hooks";
import { reAuth, googleReAuth } from "../../firebase";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import Input from "../../components/input";
import GoogleButton from "../../components/googleButton";

function ReAuthModal({
  provider,
  isModalOpen,
  reAuthHandler,
  closeModalHandler,
}) {
  const isGoogleProvider = provider?.includes("google");
  return (
    <Dialog
      open={isModalOpen}
      onClose={closeModalHandler}
      aria-labelledby="reauth-label"
      aria-describedby="reauth-desc"
    >
      <DialogTitle id="reauth-label">Are you sure?</DialogTitle>

      <DialogContent>
        <DialogContentText id="reauth-desc" sx={{ mb: 1.5 }}>
          Please {isGoogleProvider ? "re-auth" : "enter your password"} to
          confirm
        </DialogContentText>

        <ReAuth
          isGoogleProvider={isGoogleProvider}
          reAuthHandler={reAuthHandler}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ReAuthModal;

const ReAuth = ({ isGoogleProvider, reAuthHandler }) => {
  const reAuthHook = useFireAuthRedux(reAuth);
  const googleReAuthHook = useFireAuthRedux(googleReAuth);

  const handleReAuth = (e) => {
    const success = { cb: reAuthHandler };

    if (isGoogleProvider) {
      googleReAuthHook([], [], success);
    } else {
      e.preventDefault();
      reAuthHook([e.currentTarget.elements[0].value], [], success);
    }
  };

  return !isGoogleProvider ? (
    <>
      <Box
        component="form"
        onSubmit={handleReAuth}
        sx={{ display: "grid", rowGap: 2 }}
      >
        <Input
          type="password"
          label="Password"
          variant="standard"
          autoComplete="current-password"
        />
        <Button variant="outlined" type="submit">
          Confirm
        </Button>
      </Box>
    </>
  ) : (
    <GoogleButton verbTxt="Re-auth" onClick={handleReAuth} />
  );
};
