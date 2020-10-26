export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_CARD = "ADD_CARD";

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
};

export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
  };
};

export const deleteDeck = (deckId) => {
  return {
    type: DELETE_DECK,
    deckId,
  };
};

export const addCard = (card, deckId) => {
  return {
    type: ADD_CARD,
    card,
    deckId,
  };
};
