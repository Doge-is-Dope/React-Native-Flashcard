import AsyncStorage from "@react-native-community/async-storage";

const DECK_STORAGE_KEY = "deck";

/**
 * Return all of the decks
 */
export const getDecks = async () => {
  try {
    const retrievedItem = await AsyncStorage.getItem(DECK_STORAGE_KEY);
    return JSON.parse(retrievedItem);
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * Return the deck associated with the specified title
 * @param {string} title
 */
export const getDeck = (title) => {};

/**
 * Add a deck to the list.
 * @param {string} title
 */
export const saveDeck = async (title) => {
  try {
    const deck = { [title]: { title, cards: [] } };
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
    return deck;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Add a card to the deck with the associated title.
 * @param {string} deckTitle
 * @param {Object} card
 */
export const saveCardToDeck = (deckTitle, card) => {};
