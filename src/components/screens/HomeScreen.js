import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import theme, { color, dimen, typography } from "../../theme";
import { getDecks } from "../../utils/api";
import Deck from "../Deck";

const dummyDecks = {
  test1: {
    title: "React-Native",
    cards: [
      { question: "q1", answer: "a1" },
      { question: "q2", answer: "a2" },
    ],
  },
  test2: {
    title: "React",
    cards: [
      { question: "q1", answer: "a1" },
      { question: "q2", answer: "a2" },
    ],
  },
  test3: {
    title: "Hello World Hello World",
    cards: [
      { question: "q1", answer: "a1" },
      { question: "q2", answer: "a2" },
    ],
  },
};

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

  const deck = ({ title, cards }) => <Deck title={title} cards={cards} />;

  return (
    <View
      style={{
        ...styles.container,
        justifyContent: decks === null ? "center" : "flex-start",
      }}
    >
      {}
      {decks !== null ? (
        <FlatList
          data={decks}
          renderItem={deck}
          keyExtractor={(item) => item.title}
        />
      ) : (
        <Text style={styles.noDeckText}>Add new deck to get started</Text>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  noDeckText: {
    alignSelf: "center",
    ...typography.large,
  },
});
