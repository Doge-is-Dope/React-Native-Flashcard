import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { dimen, pallette } from "../theme";

const IconButton = ({ handleOnPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress}>
      <AntDesign name="plus" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: dimen.iconBtnPadding,
    marginHorizontal: dimen.appPadding,
    borderRadius: dimen.iconBtnBorderRadius,
    justifyContent: "center",
    alignContent: "center",
  },
});
