import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { useRouter, route } from "preact-router";

import { add } from "../../store/actions";
import { useDocumentTitle, useFireAuthRedux } from "../../hooks";
import {
  signUp,
  signIn,
  updateName,
  validateEmail,
  forgetPassword,
} from "../../firebase";

import Template from "./template";

const setUsername = (user) => {
  const firstName = user.get("firstName");
  const lastName = user.get("lastName");
  updateName(`${firstName} ${lastName}`);
};

function Controller({ prefix, Form }) {
  useDocumentTitle(`Sign ${prefix}`);

  const dispatch = useDispatch();
  const { previous: prevUrl } = useRouter()[0];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const signUpHook = useFireAuthRedux(signUp);
  const signInHook = useFireAuthRedux(signIn);
  const forgetPasswordHook = useFireAuthRedux(forgetPassword);

  const getSuccessMsg = () =>
    prefix === "up"
      ? "A validation email sent to your inbox"
      : "Signed in successfully";

  const successCB = (results, data) => {
    let url;

    if (prefix === "up") {
      validateEmail().then(() => {
        data && setUsername(data);
        url = "/auth/sign-in";
      });
    } else {
      dispatch(add(results));
      url = !prevUrl || prevUrl === "/auth/sign-up" ? "/" : prevUrl;
    }

    const successTimer = setTimeout(() => {
      route(url);
      clearTimeout(successTimer);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const signHook = prefix === "up" ? signUpHook : signInHook;
    const success = {
      cb: (results) => successCB(results, data),
      getMsg: getSuccessMsg,
    };
    signHook([data.get("email"), data.get("password")], [], success);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const success = {
      cb: () => setIsModalOpen(false),
      getMsg: () => "An email sent to your inbox to reset your password",
    };
    forgetPasswordHook([e.currentTarget.elements.email.value], [], success);
  };

  return (
    <Template
      prefix={prefix}
      successCB={successCB}
      isModalOpen={isModalOpen}
      getSuccessMsg={getSuccessMsg}
      setIsModalOpen={setIsModalOpen}
      handleModalSubmit={handleModalSubmit}
      form={
        <Form handleSubmit={handleSubmit} setIsModalOpen={setIsModalOpen} />
      }
    />
  );
}

export default Controller;
