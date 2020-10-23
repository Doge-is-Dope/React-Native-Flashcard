import React from "react";
import { Text, StyleSheet } from "react-native";
import theme, { pallette, color, dimen, typography } from "../../theme";

const ScreenTitle = ({ text, textColor }) => {
  return (
    <Text style={[styles.title, { color: textColor || pallette.regularText }]}>
      {text}
    </Text>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  title: {
    ...typography.title1,
  },
});
