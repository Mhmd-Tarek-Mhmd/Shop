import { route } from "preact-router";
import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";

import { add } from "../../store/actions";
import { useDocumentTitle } from "../../hooks";
import { signUp, signIn, validateEmail, forgetPassword } from "../../firebase";

import Template from "./template";

const fallbackMsg = "Something went wrong. Try again";
const noConnectionMsg = (errorCode) => {
  if (errorCode === "auth/network-request-failed") {
    return "Check your internet connection";
  }
};

function Controller({ prefix, getErrorMsg, Form }) {
  useDocumentTitle(`Sign ${prefix}`);

  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenBackdrop, setIsOpenBackdrop] = useState(false);

  const getGoogleErrorMsg = ({ code }) => {
    let msg;

    if (code === "auth/internal-error") {
      msg = "Check your internet connection";
    } else {
      msg = fallbackMsg;
    }

    setMsg(msg);
    setIsOpenError(true);
  };

  const successCB = ({ user }) => {
    if (prefix === "up") {
      validateEmail().then(() => {
        setMsg("A validation email sent to your inbox");
        setIsOpenSuccess(true);
      });
    } else {
      dispatch(add(user));
      setMsg("Success");
      setIsOpenSuccess(true);
    }

    setIsOpenBackdrop(false);
    const successTimer = setTimeout(() => {
      route(prefix === "up" ? "/auth/sign-in" : "/");
      clearTimeout(successTimer);
    }, 2500);
  };

  const errorCB = ({ code }) => {
    console.log(code);
    const msg = getErrorMsg(code) || noConnectionMsg(code) || fallbackMsg;

    setMsg(msg);
    setIsOpenError(true);
    setIsOpenBackdrop(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpenBackdrop(true);

    const sign = prefix === "up" ? signUp : signIn;
    const data = new FormData(e.currentTarget);
    sign(data.get("email"), data.get("password"))
      .then(successCB)
      .catch(errorCB);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    forgetPassword(e.currentTarget.elements.email.value)
      .then(() => {
        setMsg("An email sent to your inbox to reset your password");
        setIsOpenSuccess(true);
      })
      .catch(({ code }) => {
        const msg = noConnectionMsg(code);
        if (msg) {
          setMsg(msg);
          setIsOpenError(true);
        }
      });
  };

  return (
    <>
      <Template
        msg={msg}
        prefix={prefix}
        setMsg={setMsg}
        successCB={successCB}
        isOpenBackdrop={isOpenBackdrop}
        isOpenSuccess={isOpenSuccess}
        isOpenError={isOpenError}
        setIsOpenSuccess={setIsOpenSuccess}
        setIsOpenError={setIsOpenError}
        getGoogleErrorMsg={getGoogleErrorMsg}
        form={
          <Form handleSubmit={handleSubmit} setIsModalOpen={setIsModalOpen} />
        }
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleModalSubmit={handleModalSubmit}
      />
    </>
  );
}

export default Controller;
