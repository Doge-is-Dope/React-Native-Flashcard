import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import theme, { color, dimen, typography } from "../theme";

const Card = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
