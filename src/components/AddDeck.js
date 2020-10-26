import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { CommonActions } from "@react-navigation/native";

import theme, { pallette, dimen, typography } from "../theme";

const AddDeck = (props) => {
  const { navigation } = props;
  const [deckTitle, setDeckTitle] = useState("");
  const decks = useSelector((state) => state.decks);
  const dispatch = useDispatch();

  console.log("Add Deck: decks", decks);

  const handleAddDeck = async () => {
    if (decks[deckTitle]) {
      console.log("this deck is already exists");
      return;
    }

    // Update redux

    // Update local state
    setDeckTitle("");

    // Navigate to Deck

    // Save to DB
    // await saveDeck(deckTitle);

    // Clean local notification
  };

  const toHome = () => {
    navigation.dispatch(
      CommonActions.goBack({
        key: "Create",
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the title of the deck"
          value={deckTitle}
          onChangeText={setDeckTitle}
          returnKeyType="done"
        />

        <TouchableOpacity
          style={{
            ...theme.button,
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
    </View>
  );
};

export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimen.appMargin,
    borderRadius: dimen.iconBtnPadding,
  },
  formContainer: {
    marginTop: dimen.appMargin,
  },
  title: {
    ...typography.title1,
    marginTop: dimen.appMargin,
    marginStart: dimen.appMargin,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: pallette.primary,
    padding: dimen.appPadding,
  },
});
