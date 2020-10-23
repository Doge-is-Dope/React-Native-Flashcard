import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { color, dimen, typography } from "../theme";
const DeckScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.deckContainer}>
        <Text>React-Native</Text>
      </View>

      <View style={styles.deckContainer}>
        <Text style={styles.title}>React-Native</Text>
      </View>
    </View>
  );
};

export default DeckScreen;

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
  title: {
    ...typography.title3,
  },
});
