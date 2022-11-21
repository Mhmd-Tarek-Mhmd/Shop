import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import Controller from "./controller";
import Input from "../../components/input";

function SignIn() {
  const handleErrorMsg = (errorCode) => {
    let msg;

    if (errorCode === "auth/user-not-found") {
      msg = "This email isn't registered";
    } else if (errorCode === "auth/wrong-password") {
      msg = "Wrong password. Try again";
    }

    return msg;
  };

  return <Controller prefix="in" getErrorMsg={handleErrorMsg} Form={Form} />;
}

export default SignIn;

const Form = ({ handleSubmit, setIsModalOpen }) => (
  <Box component="form" onSubmit={handleSubmit}>
    <Input
      type="email"
      name="email"
      label="Email Address"
      autoComplete="email"
    />
    <Input
      margin="normal"
      type="password"
      name="password"
      label="Password"
      autoComplete="current-password"
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign In
    </Button>
    <Grid container>
      <Grid item xs>
        <Link
          type="button"
          component="button"
          variant="body2"
          onClick={() => setIsModalOpen(true)}
        >
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="/auth/sign-up" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  </Box>
);
