import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { useRouter, route } from "preact-router";

import { useDocumentTitle } from "../../hooks";
import {
  add,
  openAlert,
  openBackdrop,
  closeBackdrop,
} from "../../store/actions";
import {
  signUp,
  signIn,
  validateEmail,
  updateUser,
  forgetPassword,
} from "../../firebase";

import Template from "./template";

export const defaultErrorMessages = (errorCode) => {
  if (errorCode === "auth/network-request-failed") {
    return "Check your internet connection";
  } else {
    return "Something went wrong. Try again";
  }
};
const setUsername = (user) => {
  const firstName = user.get("firstName");
  const lastName = user.get("lastName");
  updateUser({ displayName: `${firstName} ${lastName}` });
};

function Controller({ prefix, getErrorMsg, Form }) {
  useDocumentTitle(`Sign ${prefix}`);
  const dispatch = useDispatch();
  const { previous: prevUrl } = useRouter()[0];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openErrorAlert = (msg) => dispatch(openAlert("error", msg));
  const openSuccessAlert = (msg) => dispatch(openAlert("success", msg));

  const successCB = (results, data) => {
    let url;

    if (prefix === "up") {
      validateEmail().then(() => {
        openSuccessAlert("A validation email sent to your inbox");
        data && setUsername(data);
        url = "/auth/sign-in";
      });
    } else {
      dispatch(add(results.user));
      openSuccessAlert("Success");
      url = !prevUrl || prevUrl === "/auth/sign-up" ? "/" : prevUrl;
    }

    dispatch(closeBackdrop());
    const successTimer = setTimeout(() => {
      route(url);
      clearTimeout(successTimer);
    }, 2000);
  };

  const errorCB = ({ code }) => {
    console.log(code);
    const msg = getErrorMsg(code) || defaultErrorMessages(code);

    openErrorAlert(msg);
    dispatch(closeBackdrop());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(openBackdrop());

    const sign = prefix === "up" ? signUp : signIn;
    const data = new FormData(e.currentTarget);
    sign(data.get("email"), data.get("password"))
      .then((results) => successCB(results, data))
      .catch(errorCB);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    forgetPassword(e.currentTarget.elements.email.value)
      .then(() => {
        openSuccessAlert("An email sent to your inbox to reset your password");
        setIsModalOpen(false);
      })
      .catch(errorCB);
  };

  return (
    <Template
      prefix={prefix}
      successCB={successCB}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      handleModalSubmit={handleModalSubmit}
      form={
        <Form handleSubmit={handleSubmit} setIsModalOpen={setIsModalOpen} />
      }
    />
  );
}

export default Controller;
