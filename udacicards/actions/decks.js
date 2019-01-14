export const DECK_ACTIONS = Object.freeze({
    GET_ALL_DECK: Symbol("get_all_deck"),
    ADD_NEW_DECK: Symbol("add_new_deck"),
    GET_A_DECK: Symbol("get_a_deck")
});

export const getAllDeck = (decks) => {
    return {
        type: DECK_ACTIONS.GET_ALL_DECK,
        decks
    };
}

export const getADeck = (deck) => {
    return {
        type: DECK_ACTIONS.GET_A_DECK,
        deck
    };
}

export const addNewDeck = (deck) => {
    return {
        type: DECK_ACTIONS.ADD_NEW_DECK,
        deck
    };
}