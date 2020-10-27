import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";

import theme, { pallette, dimen, typography } from "../theme";
import { getDecksFromStorage, saveAllDecksInStorage } from "../utils/api";
import { dummyData, getRandomColor } from "../utils/helpers";
import { receiveDecks } from "../actions";
import { render } from "react-dom";
import { isLoaded } from "expo-font";

class Home extends Component {
  state = { isLoaded: false };

  async componentDidMount() {
    const { receiveDecks } = this.props;

    let decks = await getDecksFromStorage();
    if (decks === null) {
      await saveAllDecksInStorage(dummyData);
      decks = await getDecksFromStorage();
    }
    receiveDecks(decks);
    this.setState({ isLoaded: true });
  }

  handleOnPress = (deckId) => {
    const { navigate } = this.props.navigation;
    navigate("Deck", { deckId });
  };

  render() {
    const { isLoaded } = this.state;
    if (isLoaded === false) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => (
            <Deck deck={decks[item]} handleOnPress={this.handleOnPress} />
          )}
          keyExtractor={(key) => decks[key].title}
        />
      </View>
    );
  }
}

const Deck = ({ deck, handleOnPress }) => {
  const { title, questions } = deck;
  const { textColor, backgroundColor } = getRandomColor();

  return (
    <TouchableOpacity onPress={() => handleOnPress(title)}>
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

const mapStateToProps = (decks) => {
  return { decks };
};

export default connect(mapStateToProps, { receiveDecks })(Home);

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
