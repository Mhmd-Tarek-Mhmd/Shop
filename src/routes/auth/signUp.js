import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Controller from "./controller";
import Input from "../../components/input";

function SignUp() {
  return <Controller prefix="up" Form={Form} />;
}

export default SignUp;

const Form = ({ handleSubmit }) => (
  <Box component="form" onSubmit={handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Input
          name="firstName"
          label="First Name"
          autoComplete="given-name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          name="lastName"
          label="Last Name"
          autoComplete="family-name"
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          type="email"
          name="email"
          label="Email Address"
          autoComplete="email"
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          type="password"
          name="password"
          label="Password"
          autoComplete="new-password"
        />
      </Grid>
    </Grid>
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign Up
    </Button>
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link href="/auth/sign-in" variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
  </Box>
);
