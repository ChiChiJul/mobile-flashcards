import AsyncStorage from '@react-native-async-storage/async-storage'
import { DECKS_STORAGE_KEY } from './_calendar'

export function fetchAllDecks () {
	console.log('in api. fetchAllDecks()')
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}

export function fetchDeck (key) {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then((result) => {
			const decks = JSON.parse(result)
			return decks[id] 
		})
}

export function submitNewDeckTitle (title) {
	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.Stringify({
		[title]: null
	}))
}

export function removeDeck (key) {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then((result) => {
			const data = JSON.parse(result)
			data[key] = undefined
			delete data[key]
			AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.Stringify(data))
		})
}