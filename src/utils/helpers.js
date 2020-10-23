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
 * @param {Object} deck
 */
export const saveDeck = async (deck) => {
  try {
    const deckObj = { [deck.title]: deck };
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deckObj));
    return deck;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Take in two arguments, id and card, and will add the card to the list of questions for the deck with the associated title.
 * @param {string} id
 * @param {Object} card
 */
export const addCardToDeck = (id, card) => {};
