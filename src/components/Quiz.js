import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import theme, { color, dimen, typography } from "../theme";

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Quiz</Text>
      </View>

      <View style={styles.answerBtnContainer}>
        <RoundButton correct />
        <RoundButton />
      </View>
    </View>
  );
};

const RoundButton = ({ correct, handleOnPress }) => {
  if (correct) {
    return (
      <TouchableOpacity
        style={{ ...styles.answerBtn, backgroundColor: "green" }}
      >
        <AntDesign name="check" size={24} color="black" />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={{ ...styles.answerBtn, backgroundColor: "red" }}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
    );
  }
};

export default Quiz;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },

  card: { flex: 1 },
  answerBtn: {
    padding: 16,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  answerBtnContainer: {
    flexDirection: "row",
  },
});
