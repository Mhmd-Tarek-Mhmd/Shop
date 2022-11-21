import { useDispatch } from "react-redux";

import { openAlert, openBackdrop, closeBackdrop } from "../store/actions";

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
    dispatch(openAlert(type, msg));
    cb && cb(results);
  };

  return (methodArgs=[], actionArgs=[], success, error) => {
    dispatch(openBackdrop());

    fireAuthMethod(...methodArgs)
      .then((results) => {
        const msg = success?.getMsg() || "Success";
        reduxAction && dispatch(reduxAction(...actionArgs));
        callback("success", msg, success?.cb, results);
      })
      .catch((err) => {
        console.log(err);
        const msg = error?.getMsg(err) || defaultErrorMessages(err.code);
        callback("error", msg, error?.cb, err);
      });

    dispatch(closeBackdrop());
  };
}

export default useFireAuthRedux;
