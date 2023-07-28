import { createTheme } from "@mui/material";
import { DefaultThemeColors } from "../constants/colors/defaultColors";
export const theme = (data) => {
  const { primary, secondary, button, text, chip, background } =
    data?.colors ?? {};
  return createTheme({
    palette: {
      primary: primary || {
        light: DefaultThemeColors.primary.light,
        main: DefaultThemeColors.primary.main,
        dark: DefaultThemeColors.primary.dark,
      },
      secondary: secondary || {
        light: DefaultThemeColors.secondary.light,
        main: DefaultThemeColors.secondary.main,
        dark: DefaultThemeColors.secondary.dark,
      },
      background: background || {
        default: DefaultThemeColors.background.default,
        light: DefaultThemeColors.background.light,
      },
      button: button || {
        main: DefaultThemeColors.button.main,
      },
      text: text || {
        primary: DefaultThemeColors.text.primary,
        secondary: DefaultThemeColors.text.secondary,
      },
      chip: chip || {
        greenShade: DefaultThemeColors.chip.greenShade,
        redShade: DefaultThemeColors.chip.redShade,
      },
    },
    typography: {
      fontFamily: "Open Sans, sans-serif",
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
    },
  });
};
