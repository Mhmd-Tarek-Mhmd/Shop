import { useState } from "preact/hooks";
import { useSelector } from "react-redux";

import { useDocumentTitle } from "../../hooks";

import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Slots from "./slots";
import ReAuthModal from "./reAuthModal";
import Section from "../../components/section";

let settingHandler, handlerArgs;

function Settings() {
  useDocumentTitle("Settings");
  const user = useSelector((state) => state.authedUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandler = () => setIsModalOpen(false);
  const slotHandler = (handler, args = []) => {
    settingHandler = handler;
    handlerArgs = args;
    setIsModalOpen(true);
  };
  const reAuthHandler = () => {
    settingHandler(...handlerArgs);
    let reAuthTimer = setTimeout(() => {
      closeModalHandler();
      clearTimeout(reAuthTimer);
    }, 100);
  };

  return (
    <Section title="Settings">
      {user ? (
        <Container maxWidth="md" sx={{ display: "grid", rowGap: 3 }}>
          <Slots slotHandler={slotHandler} />
          <ReAuthModal
            isModalOpen={isModalOpen}
            provider={user.providerId}
            reAuthHandler={reAuthHandler}
            closeModalHandler={closeModalHandler}
          />
        </Container>
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
