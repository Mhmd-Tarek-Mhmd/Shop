import { useState } from "preact/hooks";
import { useThemeColors } from "../hooks";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Counter({ id, isDisabled, increaseCb, decreaseCb, changeCb }) {
  const [val, setVal] = useState(1);
  const error = useThemeColors("error");
  const primary = useThemeColors("primary");

  const handleKeyPress = (e) => {
    // Prevent non numeric values & spaces
    if (isNaN(+e.key) || e.key === " ") e.preventDefault();

    // Prevent zero value
    if (!+e.key) {
      if (
        !e.target.value.length ||
        document.getSelection().toString() === e.target.value
      )
        e.preventDefault();
    }
  };
  const handleChange = (e) => {
    if (e.target.value) {
      setVal(e.target.value);
      changeCb && changeCb(+e.target.value);
    }
  };
  const handleIncrease = () => {
    setVal((prev) => +prev + 1);
    increaseCb && increaseCb();
  };
  const handleDecrease = () => {
    if (val > 1) {
      setVal((prev) => +prev - 1);
      decreaseCb && decreaseCb();
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "36.5px",
        gridTemplateColumns: "50px 70px 50px",
      }}
    >
      <Button
        variant="outlined"
        aria-label="Decrease quantity"
        onClick={handleDecrease}
        sx={{ minWidth: "100%" }}
        disabled={isDisabled}
      >
        -
      </Button>
      <TextField
        value={val}
        id={id && `counter-${id}`}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        inputProps={{
          inputMode: "numeric",
          pattern: "[1-9]*",
          ariaLabel: "Enter number of peices",
        }}
        sx={{
          ".MuiOutlinedInput-root": { minHeight: "100%" },
          input: { boxSizing: "border-box", textAlign: "center" },
          "& input:valid + fieldset": { borderColor: primary },
          "& input:invalid + fieldset": { borderColor: error },
        }}
        disabled={isDisabled}
      />
      <Button
        variant="outlined"
        aria-label="Increase quantity"
        onClick={handleIncrease}
        sx={{ minWidth: "100%" }}
        disabled={isDisabled}
      >
        +
      </Button>
    </Box>
  );
}

export default Counter;
