import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { connect } from "react-redux";

import { addDeck } from "../actions";
import { saveDeckInStorage } from "../utils/api";
import theme, { pallette, dimen, typography } from "../theme";

const AddDeck = ({ decks, addDeck, navigation }) => {
  const [deckTitle, setDeckTitle] = useState("");

  // console.log("AddDeck - decks", decks);

  const handleAddDeck = async () => {
    // Check if the deck exists
    if (decks[deckTitle]) {
      Alert.alert(
        "Deck Already Exists",
        "Another deck with this title exists. Please try another title",
        [{ text: "OK", onPress: () => setDeckTitle() }],
        { cancelable: false }
      );
      return;
    }

    // Compose deck object
    const deck = {
      [deckTitle]: {
        title: deckTitle,
        questions: [],
      },
    };

    // Update redux
    addDeck(deck);

    // Save to DB
    await saveDeckInStorage(deck);

    // Update local state
    setDeckTitle("");

    // Navigate to Deck
    navigation.navigate("Deck", { deckId: deckTitle });
  };

  return (
    <View style={styles.container}>
      <Text style={typography.title1}>What is the title of your new deck?</Text>

      <TextInput
        style={styles.input}
        placeholder="Deck Title"
        value={deckTitle}
        onChangeText={setDeckTitle}
        returnKeyType="done"
      />

      <TouchableOpacity
        style={{
          ...theme.button,
          alignSelf: "center",
          marginTop: dimen.appMargin,
          backgroundColor: deckTitle === "" ? "lightgrey" : pallette.primary,
        }}
        disabled={deckTitle === ""}
        onPress={handleAddDeck}
      >
        <Text
          style={{
            ...theme.buttonText,
            color: deckTitle === "" ? pallette.regularText : "white",
          }}
        >
          Create
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (decks) => {
  return { decks };
};

export default connect(mapStateToProps, { addDeck })(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimen.appMargin,
    borderRadius: dimen.iconBtnPadding,
  },
  title: {
    ...typography.title1,
    marginTop: dimen.appMargin,
    marginStart: dimen.appMargin,
  },
  input: {
    borderWidth: 1,
    borderRadius: 0,
    borderColor: pallette.primary,
    padding: dimen.appMargin,
    marginTop: dimen.appMargin,
  },
});
