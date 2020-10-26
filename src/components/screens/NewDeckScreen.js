import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import theme, { pallette, color, dimen, typography } from "../../theme";
import { saveDeck } from "../../utils/api";

const NewDeckScreen = () => {
  const [deckTitle, setDeckTitle] = useState("");

  const onAddPress = async () => {
    await saveDeck(deckTitle);
    setDeckTitle("");
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default NewDeckScreen;

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
