import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect, useDispatch } from "react-redux";

import { addCard } from "../actions";
import { saveCardInStorage } from "../utils/api";
import theme, { pallette, dimen, typography } from "../theme";

const AddCard = ({ route, navigation }) => {
  const { deckId } = route.params;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();

  const handleAddCard = async () => {
    if (!question || !answer) {
      return;
    }

    const card = { question: question, answer: answer };

    dispatch(addCard(card, deckId));

    await saveCardInStorage(card, deckId);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Card Question"
        returnKeyType="done"
        onChangeText={setQuestion}
      />

      <TextInput
        style={styles.input}
        placeholder="Card Answer"
        returnKeyType="done"
        onChangeText={setAnswer}
      />

      <TouchableOpacity
        style={{
          ...theme.button,
          margin: dimen.appMargin,
          alignSelf: "center",
          width: "80%",
        }}
        onPress={handleAddCard}
      >
        <Text style={theme.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: dimen.appMargin,
  },
});
