import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme, { color, dimen, typography } from "../../theme";

import ScreenTitle from "./ScreenTitle";
import { getDecks } from "../../utils/api";

const HomeScreen = () => {
  const [decks, setDecks] = useState(null);

  useEffect(() => {
    const fetchDecks = async () => {
      const decks = await getDecks();
      setDecks(decks);
      console.log("decks", decks);
    };

    fetchDecks();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle text="Home" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
