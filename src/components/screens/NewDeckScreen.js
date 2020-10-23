import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme, { pallette, color, dimen, typography } from "../../theme";
import ScreenTitle from "./ScreenTitle";
import { saveDeck } from "../../utils/helpers";

const NewDeckScreen = () => {
  const [deckTitle, setDeckTitle] = useState("");

  const onAddPress = async () => {
    const deck = {
      title: deckTitle,
      cards: [],
    };
    await saveDeck(deck);
    setDeckTitle("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle text={"New Deck"} />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the name of the deck"
          value={deckTitle}
          onChangeText={setDeckTitle}
          returnKeyType="done"
        />

        <TouchableOpacity
          style={{ ...theme.button, marginTop: dimen.appMargin }}
          onPress={onAddPress}
        >
          <Text style={theme.buttonText}>{"add".toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewDeckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimen.appMargin,
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
