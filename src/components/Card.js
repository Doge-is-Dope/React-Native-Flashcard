import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme, { pallette, dimen, typography } from "../theme";

const Card = ({ card, handleFlipCard, showAnswer }) => {
  const { question, answer } = card;

  return (
    <View style={styles.container}>
      {showAnswer ? (
        <Text style={styles.answerText}>{answer}</Text>
      ) : (
        <Text style={styles.questionText}>{question}</Text>
      )}

      <TouchableOpacity style={styles.buttonContainer} onPress={handleFlipCard}>
        <Text style={styles.buttonText}>
          {showAnswer ? "Show Question" : "Show Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", margin: dimen.appMargin },
  questionText: {
    ...typography.title2,
    textAlign: "center",
  },
  answerText: {
    ...typography.title2,
    textAlign: "center",
    color: pallette.primary,
  },
  buttonContainer: {
    ...theme.button,
    alignSelf: "center",
    backgroundColor: pallette.primary,
    marginTop: 40,
  },
  buttonText: {
    ...theme.buttonText,
    color: "white",
  },
});
