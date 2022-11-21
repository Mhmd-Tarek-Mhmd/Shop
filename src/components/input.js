import { useState } from "preact/hooks";

import TextField from "@mui/material/TextField";

const minLength = 6;
const handleEmailInput = (e) => {
  const pattern = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/;
  e.target.setCustomValidity(
    !pattern.test(e.target.value) && !e.target.validity.valueMissing
      ? "Enter a valid email"
      : ""
  );
};

function Input({ inputProps, ...props }) {
  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleInput = (e) => {
    if (props.type === "email") handleEmailInput(e);
    setIsError(!e.target.checkValidity());
    setHelperText(e.target.validationMessage);
  };

  return (
    <TextField
      error={isError}
      helperText={helperText}
      required={props.required || true}
      fullWidth={props.fullWidth || true}
      inputProps={Object.assign(
        {
          onBlur: handleInput,
          ...(props.type === "password" && { minLength }),
        },
        inputProps
      )}
      {...props}
    />
  );
}

export default Input;
