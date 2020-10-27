import AsyncStorage from "@react-native-community/async-storage";

const DECK_STORAGE_KEY = "Flashcards:Deck";

/**
 * Return all of the decks
 */
export const getDecksFromStorage = async () => {
  const retrievedItem = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  return JSON.parse(retrievedItem);
};

/**
 * Delete all of the decks
 */
export const removeAllDecksFromStorage = async () => {
  await AsyncStorage.clear();
};

/**
 * Add a deck
 * @param {Object} deck
 */
export const saveDeckInStorage = async (deck) => {
  await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
};

/**
 * Add decks
 * @param {Object} decks
 */
export const saveAllDecksInStorage = async (decks) => {
  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
};

/**
 * Delete a deck
 * @param {string} deckId
 */
export const removeDeckFromStorage = async (deckId) => {
  const decksData = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  const decks = JSON.parse(decksData);
  // todo: there may be a better way
  decks[deckId] = undefined;
  delete decks[deckId];
  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
};

/**
 * Add a card to the deck with the associated id.
 * @param {string} deckId
 * @param {Object} card
 */
export const saveCardInStorage = async (card, deckId) => {
  const decksData = await AsyncStorage.getItem(DECK_STORAGE_KEY);
  const decks = JSON.parse(decksData);

  decks[deckId] = {
    ...decks[deckId],
    questions: [...decks[deckId].questions, card],
  };
  await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
};
