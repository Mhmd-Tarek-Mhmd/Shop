import { useState } from "preact/hooks";
import { useSelector } from "react-redux";

import { useDocumentTitle } from "../../hooks";

import Container from "@mui/material/Container";

import ReAuthModal from "./reAuthModal";

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
    <Container maxWidth="md" sx={{ display: "grid", rowGap: 3 }}>
      <Slots slotHandler={slotHandler} />
      <ReAuthModal
        isModalOpen={isModalOpen}
        provider={user.providerId}
        reAuthHandler={reAuthHandler}
        closeModalHandler={closeModalHandler}
      />
    </Container>
  );
}

export default Settings;
