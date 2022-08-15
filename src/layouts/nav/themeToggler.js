import { useDispatch, useSelector } from "react-redux";

import Tooltip from "@mui/material/Tooltip";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { toggleTheme } from "../../store/actions";

function ThemeToggler({ Element, ...props }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <Tooltip
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      arrow
    >
      <Element {...props} onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </Element>
    </Tooltip>
  );
}

export default ThemeToggler;
