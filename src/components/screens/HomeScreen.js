import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Deck from "../Deck";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Deck />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
