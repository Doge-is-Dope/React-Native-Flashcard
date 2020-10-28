import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme, { pallette, dimen, typography } from "../theme";

const QuizResult = ({ score, total, handleOnBackToDeck, handleRestart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        {`You got ${score} / ${total}`} correct!
      </Text>

      <TouchableOpacity style={styles.buttonContainer} onPress={handleRestart}>
        <Text style={styles.buttonText}>Restart Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleOnBackToDeck}
      >
        <Text style={styles.buttonText}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResult;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", margin: dimen.appMargin },
  questionText: {
    ...typography.title2,
    textAlign: "center",
    margin: dimen.appMargin,
  },
  buttonContainer: {
    ...theme.button,
    alignSelf: "center",
    backgroundColor: pallette.primary,
    marginTop: dimen.appMargin,
    width: "100%",
  },
  buttonText: {
    ...theme.buttonText,
    color: "white",
  },
});
