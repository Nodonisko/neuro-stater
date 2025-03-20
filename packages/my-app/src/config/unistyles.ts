import { StyleSheet } from "react-native-unistyles";

const darkTheme = {
  black: "#070707",
  black80: "rgba(7, 7, 7, 0.8)",
  black60: "rgba(7, 7, 7, 0.6)",
  black20: "rgba(7, 7, 7, 0.2)",
  white100: "#ffffff",
  white80: "rgba(255, 255, 255, 0.8)",
  white10: "rgba(255, 255, 255, 0.1)",
  grey: "#252525",
  green: "#30B400",
  red: "#B40000",
  gold: "#B49300",
};

export const appThemes = {
  dark: darkTheme,
};

export type ColorName = keyof typeof darkTheme;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    initialTheme: "dark",
  },
  themes: appThemes,
});
