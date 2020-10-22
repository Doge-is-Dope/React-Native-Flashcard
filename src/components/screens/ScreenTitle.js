import React from "react";
import { Text, StyleSheet } from "react-native";
import { color, dimen, typography } from "../../theme";

const ScreenTitle = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default ScreenTitle;

const styles = StyleSheet.create({
  title: {
    ...typography.title1,
    margin: dimen.appMargin,
  },
});
