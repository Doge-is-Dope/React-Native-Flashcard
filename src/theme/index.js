import { StyleSheet, Platform } from "react-native";
import * as color from "./color";
import * as dimen from "./dimen";
import * as typography from "./typography";

const pallette = {
  ...color,
  primary: color.lightBlue,
  primaryDark: color.darkBlue,
  accent: color.crimson,
  regularText: "rgba(0, 0, 0, 0.87)",
  helperText: "rgba(0, 0, 0, 0.6)",
  errorText: "rgba(176, 0, 32, 1)",
  correct: "#4ecdc4",
  incorrect: "#ff6b6b",
};

// global theme
export default StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: dimen.btnBorderRadius,
    backgroundColor: pallette.primary,
    paddingVertical: dimen.btnVerticalPadding,
    paddingHorizontal: dimen.btnHorizontalPadding,
  },
  buttonText: {
    ...typography.regular,
    color: "white",
  },
});

export { pallette, color, dimen, typography };
