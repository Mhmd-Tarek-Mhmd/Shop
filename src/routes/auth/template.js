import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import Backdrop from "@mui/material/Backdrop";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";

import Input from "./input";
import GoogleAuthButton from "./google";

function Template({
  prefix,
  successCB,
  form,

  msg,
  setMsg,
  isOpenBackdrop,
  isOpenSuccess,
  isOpenError,
  setIsOpenSuccess,
  setIsOpenError,
  getGoogleErrorMsg,

  isModalOpen,
  setIsModalOpen,
  handleModalSubmit,
}) {
  return (
    <Box component="section" sx={{ my: 7.5 }}>
      <Container
        maxWidth="xs"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Avatar sx={{ mb: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 6 }}>
          Sign {prefix}
        </Typography>

        <GoogleAuthButton
          prefix={prefix}
          setMsg={setMsg}
          successCB={successCB}
          catchCB={getGoogleErrorMsg}
        />

        <Divider
          sx={{
            my: 5,
            width: "100%",
            position: "relative",
            overflow: "unset",
            "&::before": {
              content: '"or"',
              display: "grid",
              placeItems: "center",
              width: "50px",
              height: "30px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: (theme) => theme.palette.background.default,
            },
          }}
        />

        {form}
      </Container>

      <Fallback
        msg={msg}
        isOpenBackdrop={isOpenBackdrop}
        isOpenSuccess={isOpenSuccess}
        isOpenError={isOpenError}
        setIsOpenSuccess={setIsOpenSuccess}
        setIsOpenError={setIsOpenError}
      />

      {prefix === "in" && (
        <ForgetForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleModalSubmit={handleModalSubmit}
        />
      )}
    </Box>
  );
}

export default Template;

const Fallback = ({
  msg,
  isOpenBackdrop,
  isOpenSuccess,
  isOpenError,
  setIsOpenSuccess,
  setIsOpenError,
}) => (
  <>
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpenBackdrop}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    <Snackbar
      open={isOpenSuccess}
      autoHideDuration={4000}
      onClose={() => setIsOpenSuccess(false)}
    >
      <Alert
        onClose={() => setIsOpenSuccess(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        {msg}
      </Alert>
    </Snackbar>
    <Snackbar
      open={isOpenError}
      autoHideDuration={4000}
      onClose={() => setIsOpenError(false)}
    >
      <Alert
        onClose={() => setIsOpenError(false)}
        severity="error"
        sx={{ width: "100%" }}
      >
        {msg}
      </Alert>
    </Snackbar>
  </>
);

const ForgetForm = ({ isModalOpen, setIsModalOpen, handleModalSubmit }) => (
  <Modal
    open={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    aria-labelledby="modal-title"
    sx={{ display: "grid", placeItems: "center" }}
  >
    <Box
      sx={{
        p: 5,
        borderRadius: 2,
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Typography id="modal-title" variant="h6" component="h2">
        Forget your password?
      </Typography>
      <Box component="form" onSubmit={handleModalSubmit}>
        <Input
          type="email"
          name="email"
          margin="normal"
          label="Email Address"
          autoComplete="email"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  </Modal>
);
