import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, dimen, typography } from "../../theme";
import ScreenTitle from "./ScreenTitle";

const NewDeckScreen = () => {
  return (
    <SafeAreaView>
      <ScreenTitle text={"New Deck"} />

      <TextInput></TextInput>
    </SafeAreaView>
  );
};

export default NewDeckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...typography.title1,
    marginTop: dimen.appMargin,
    marginStart: dimen.appMargin,
  },
});
