import { update } from "../../store/actions";
import { updateName, updateEmail, updatePassword } from "../../firebase";

import Slot from "./slot";
import DangerZone from "./dangerZone";

function Slots({ slotHandler }) {
  const getProps = (authMethod, isStoreAction = true) => ({
    authMethod,
    slotHandler,
    ...(isStoreAction && { storeAction: update }),
  });

  return (
    <>
      <Slot settingName="name" {...getProps(updateName)} />
      <Slot settingName="email" {...getProps(updateEmail)} />
      <Slot settingName="password" {...getProps(updatePassword, false)} />
      <DangerZone slotHandler={slotHandler} />
    </>
  );
}

export default Slots;
