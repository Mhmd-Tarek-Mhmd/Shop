import { useDispatch } from "react-redux";

import { openAlert, openBackdrop, closeBackdrop } from "../store/actions";

const errorMessages = {
  "auth/wrong-password": "Wrong password. Try again",
  "auth/user-not-found": "This email isn't registered",
  "auth/email-already-in-use": "This mail is already registered",
};
const defaultErrorMessages = (errorCode) => {
  if (errorCode === "auth/network-request-failed") {
    return "Check your internet connection";
  } else {
    return "Something went wrong. Try again";
  }
};

function useFireAuthRedux(fireAuthMethod, reduxAction) {
  const dispatch = useDispatch();
  const callback = (type, msg, cb, results) => {
    msg !== null && dispatch(openAlert(type, msg));
    cb && cb(results);
  };

  return (methodArgs = [], actionArgs = [], success, error) => {
    dispatch(openBackdrop());

    fireAuthMethod(...methodArgs)
      .then((results) => {
        const msg =
          success?.getMsg() === null ? null : success?.getMsg() || "Success";
        reduxAction && dispatch(reduxAction(...actionArgs));
        callback("success", msg, success?.cb, results);
      })
      .catch((err) => {
        console.log(err);
        const msg =
          error?.getMsg(err) ||
          errorMessages[err.code] ||
          defaultErrorMessages(err.code);
        callback("error", msg, error?.cb, err);
      });

    dispatch(closeBackdrop());
  };
}

export default useFireAuthRedux;
