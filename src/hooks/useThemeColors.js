import { useTheme } from "@mui/material/styles";

function useThemeColors(
  color,
  type = "hex",
  lightVariant = "main",
  darkVariant = "dark"
) {
  const theme = useTheme();
  const hex =
    theme.palette.mode === "light"
      ? theme.palette[color][lightVariant]
      : theme.palette[color][darkVariant];

  return type === "hex" ? hex : hexToRGB(hex);
}

export default useThemeColors;

const hexToRGB = (hex) => {
  const h = hex.length === 7 ? hex : `#${hex.repeat(2).replace(/#/g, "")}`;

  const r = `0x${h[1]}${h[2]}`;
  const g = `0x${h[3]}${h[4]}`;
  const b = `0x${h[5]}${h[6]}`;

  return `${+r}, ${+g}, ${+b}`;
};
