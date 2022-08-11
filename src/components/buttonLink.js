import { route } from "preact-router";
import { forwardRef } from "preact/compat";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function ButtonLink(props) {
  const isIconButton = typeof props.children !== "string";
  const Ele = isIconButton ? IconButton : Button;

  const handleClick = (e) => {
    e.preventDefault();
    route(props.href);
    if (props.handleClick) props.handleClick();
  };

  return (
    <Ele {...props} onClick={handleClick}>
      {props.children}
    </Ele>
  );
}

export default forwardRef((props, ref) => (
  <ButtonLink {...props} forwardedRef={ref} />
));
