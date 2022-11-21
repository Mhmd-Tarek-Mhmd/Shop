import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";

import GoogleAuthButton from "./google";
import Input from "../../components/input";

function Template({
  form,
  prefix,
  successCB,
  isModalOpen,
  getSuccessMsg,
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

        <GoogleAuthButton prefix={prefix} successCB={successCB} getSuccessMsg={getSuccessMsg} />

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

      {prefix === "in" && (
        <ForgetModalForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleModalSubmit={handleModalSubmit}
        />
      )}
    </Box>
  );
}

export default Template;

const ForgetModalForm = ({
  isModalOpen,
  setIsModalOpen,
  handleModalSubmit,
}) => (
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
