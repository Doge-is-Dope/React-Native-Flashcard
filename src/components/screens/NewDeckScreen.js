import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NewDeckScreen = () => {
  return (
    <SafeAreaView>
      <Text>New Deck</Text>
    </SafeAreaView>
  );
};

export default NewDeckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
