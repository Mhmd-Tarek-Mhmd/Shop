import { useSelector } from "react-redux";

import { useDocumentTitle } from "../hooks";

import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import Section from "../components/section";
import SettingsContainer from "../containers/settings";

function Settings() {
  useDocumentTitle("Settings");
  const user = useSelector((state) => state.authedUser);

  return (
    <Section title="Settings">
      {user ? (
        <SettingsContainer />
      ) : (
        <Typography sx={{ textAlign: "center" }}>
          You should <Link href="/auth/sign-in">sign in</Link> to see content of
          this page
        </Typography>
      )}
    </Section>
  );
}

export default Settings;
