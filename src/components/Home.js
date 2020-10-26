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
import { dummyData } from "../utils/helpers";
import { receiveDecks } from "../actions";
import Deck from "./Deck";

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
    return (
      <TouchableOpacity>
        <View style={styles.deckContainer}>
          <Text style={styles.deckTitle} numberOfLines={1}>
            {decks[item].title}
          </Text>
          <Text>{decks[item].questions.length}</Text>
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
    padding: 16,
    backgroundColor: pallette.color3,
    borderRadius: 16,
    alignItems: "center",
  },
  deckTitle: {
    ...typography.title2,
  },
  deckCards: {
    ...typography.regular,
  },
});
