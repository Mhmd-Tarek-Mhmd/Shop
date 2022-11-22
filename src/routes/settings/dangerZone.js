import { route } from "preact-router";

import { clear } from "../../store/actions";
import { deleteProfile } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";

import Typography from "@mui/material/Typography";

import { Views as Slot } from "./slot";

function DangerZone({ slotHandler }) {
  const deleteProfileHook = useFireAuthRedux(deleteProfile, clear);

  const actionHandler = () => {
    const success = {
      cb: () => route("/"),
      getMsg: () => "Profile deleted successfully",
    };

    slotHandler(deleteProfileHook, [[], [], success]);
  };

  return (
    <Slot
      title="Danger Zone"
      color="error"
      actionTxt="Delete"
      actionHandler={actionHandler}
      settingViews={
        <>
          <strong>Delete account</strong>
          <Typography>
            Once you deleted an account, there is no going back. Please be
            certain.
          </Typography>
        </>
      }
    />
  );
}

export default DangerZone;
