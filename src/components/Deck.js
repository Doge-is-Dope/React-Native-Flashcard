import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme, { pallette, dimen, typography } from "../theme";

const Deck = ({ title, cards }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text>Number of cards: {cards.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Deck;

const styles = StyleSheet.create({
  container: {
    marginTop: dimen.appMargin,
    marginHorizontal: dimen.appMargin,
    padding: 16,
    backgroundColor: pallette.color3,
    borderRadius: 16,
    alignItems: "center",
  },
  title: {
    ...typography.title2,
  },
  cardsCount: {
    ...typography.regular,
  },
});
