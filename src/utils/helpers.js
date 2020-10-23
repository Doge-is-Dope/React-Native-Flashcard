import AsyncStorage from "@react-native-community/async-storage";

const DECK_STORAGE_KEY = "deck";

/**
 * Return all of the decks along with their titles, questions, and answers.
 */
export const getDecks = async () => {
  return await AsyncStorage.getItem(DECK_STORAGE_KEY);
};

/**
 * Take in a single id argument and return the deck associated with that id.
 * @param {string} id
 */
export const getDeck = (id) => {};

/**
 * Take in a single title argument and add it to the decks.
 * @param {string} title
 */
export const saveDeckTitle = async (title) => {
  try {
    const deckObj = { [new Date().valueOf()]: title };
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deckObj));
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
