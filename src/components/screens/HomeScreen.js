import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, dimen, typography } from "../../theme";
import Deck from "../Deck";
import ScreenTitle from "./ScreenTitle";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle text="Home" />
      <Deck />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
