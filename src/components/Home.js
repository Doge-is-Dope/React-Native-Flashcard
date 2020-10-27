import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import theme, { pallette, dimen, typography } from "../theme";
import { getDecksFromStorage, saveAllDecksInStorage } from "../utils/api";
import { dummyData, getRandomColor } from "../utils/helpers";
import { receiveDecks } from "../actions";

const HomeScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  const decks = useSelector((state) => state.decks);

  useEffect(() => {
    const initData = async () => {
      let decks = await getDecksFromStorage();
      if (decks === null) {
        await saveAllDecksInStorage(dummyData);
        decks = await getDecksFromStorage();
      }

      dispatch(receiveDecks({ decks: decks }));

      setIsReady(true);
    };

    initData();
  }, []);

  const deck = ({ item }) => {
    // console.log("item", decks[item]);
    const { title, questions } = decks[item];
    const { textColor, backgroundColor } = getRandomColor();
    return (
      <TouchableOpacity>
        <View
          style={{ ...styles.deckContainer, backgroundColor: backgroundColor }}
        >
          <Text
            style={{ ...styles.deckTitle, color: textColor }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text style={{ ...styles.deckCards, color: textColor }}>
            {questions.length} {questions.length <= 1 ? "card" : "cards"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (!isReady) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <FlatList
        data={Object.keys(decks)}
        renderItem={deck}
        keyExtractor={(item) => decks[item].title}
      />
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
  deckContainer: {
    marginTop: dimen.appMargin,
    marginHorizontal: dimen.appMargin,
    padding: 44,
    borderRadius: 16,
    alignItems: "center",
  },
  deckTitle: {
    ...typography.title2,
  },
  deckCards: {
    ...typography.regular,
    marginTop: dimen.appPadding,
  },
});
