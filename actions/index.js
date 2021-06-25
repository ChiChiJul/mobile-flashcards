export const RECEIVE_DECKS = 'RECEIVE_DECKS'
//export const ADD_NEW_DECK_TITLE = 'ADD_NEW_DECK_TITLE'
//export const ADD_CARD = 'ADD_CARD'

export function receiveDecks (decks) {
	return {
		type: RECEIVE_DECKS,
		decks,
	}
}