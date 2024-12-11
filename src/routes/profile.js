import { useSelector } from "react-redux";

import { useDocumentTitle } from "../hooks";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Section from "../components/section";
import ProfileContainer from "../containers/Profile";

function Profile() {
  const user = useSelector((state) => state.authedUser);

  useDocumentTitle(user && user.displayName ? user.displayName : "Profile");

  return (
    <Section title="Profile">
      {user ? (
        <ProfileContainer />
      ) : (
        <Typography sx={{ textAlign: "center" }}>
          You should <Link href="/auth/sign-in">sign in</Link> to see content of
          this page
        </Typography>
      )}
    </Section>
  );
}

export default Profile;
