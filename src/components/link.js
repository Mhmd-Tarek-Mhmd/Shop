import { forwardRef } from "preact/compat";
import { Link as PreactLink } from "preact-router/match";

import MuiLink from "@mui/material/Link";

function Link(props) {
  return (
    <MuiLink
      {...props}
      component={forwardRef((props, ref) => (
        <PreactLink {...props} forwardedRef={ref} />
      ))}
    >
      {props.children}
    </MuiLink>
  );
}

export default Link;
