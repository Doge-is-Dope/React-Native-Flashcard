import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { color, dimen } from "../theme";
const Deck = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.deckContainer}>
        <Text>React-Native</Text>
      </View>

      <View style={styles.deckContainer}>
        <Text>React-Native</Text>
      </View>
    </View>
  );
};

export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckContainer: {
    borderRadius: dimen.cardBorderRadius,
    backgroundColor: color.color2,
    padding: dimen.appPadding,
    marginTop: dimen.appMargin,
    marginHorizontal: dimen.appMargin,
  },
  title: {},
});
