import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useSelector, connect } from "react-redux";

import theme, { pallette, dimen, typography } from "../theme";
import { deleteDeck } from "../actions";
import { removeDeckFromStorage } from "../utils/api";

const Deck = ({ route, navigation, deck, deleteDeck }) => {
  const { deckId } = route.params;

  const handleManage = () => {
    navigation.navigate("Manage", { deckId: deckId });
  };

  const handleAddCard = () => {
    navigation.navigate("AddCard", { deckId: deckId });
  };

  const handleStartQuiz = () => {
    if (deck.questions.length === 0) {
      Alert.alert(
        "Empty Deck",
        "You need to add more cards to start a quiz",
        [{ text: "Ok" }],
        { cancelable: false }
      );
      return;
    }
    navigation.navigate("Quiz", { deckId: deckId });
  };

  const handleDeleteDeck = () => {
    Alert.alert(
      "Delete Deck",
      `Delete the deck ${deck.title}?`,
      [
        { text: "Cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await removeDeckFromStorage(deck.title);
            deleteDeck(deck.title);
            navigation.navigate("Home");
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (!deck) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subTitle}>{deck.questions.length} cards</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: 32,
        }}
      >
        <TouchableOpacity
          style={{
            ...theme.button,
            marginTop: dimen.appMargin,
            borderWidth: 1,
            backgroundColor: null,
            borderColor: pallette.primary,
            width: "80%",
          }}
          onPress={handleManage}
        >
          <Text style={{ ...theme.buttonText, color: pallette.primary }}>
            Manage
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...theme.button,
            marginTop: dimen.appMargin,
            borderWidth: 1,
            backgroundColor: null,
            borderColor: pallette.primary,
            width: "80%",
          }}
          onPress={handleAddCard}
        >
          <Text style={{ ...theme.buttonText, color: pallette.primary }}>
            Add Card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...theme.button, marginTop: dimen.appMargin, width: "80%" }}
          onPress={handleStartQuiz}
        >
          <Text style={{ ...theme.buttonText }}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...theme.button,
            marginTop: dimen.appMargin,
            backgroundColor: null,
          }}
          onPress={handleDeleteDeck}
        >
          <Text style={{ ...theme.buttonText, color: pallette.errorText }}>
            Delete Deck
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (decks, ownProps) => {
  const { deckId } = ownProps.route.params;
  const deck = decks[deckId];
  return { deck };
};

export default connect(mapStateToProps, { deleteDeck })(Deck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    ...typography.title2,
    marginTop: dimen.appMargin,
  },
  subTitle: {
    ...typography.regular,
    color: "grey",
  },
});
