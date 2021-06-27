import AsyncStorage from '@react-native-async-storage/async-storage'

export const DECKS_STORAGE_KEY = 'flashcards:calender'

export function setDeckData () {
	console.log('in _caldendar. setDeckData()')
	
	let dummyData = {
	  React: {
	    title: 'React',
	    questions: [
	      {
	        question: 'What is React?',
	        answer: 'A library for managing user interfaces'
	      },
	      {
	        question: 'Where do you make Ajax requests in React?',
	        answer: 'The componentDidMount lifecycle event'
	      }
	    ]
	  },
	  JavaScript: {
	    title: 'JavaScript',
	    questions: [
	      {
	        question: 'What is a closure?',
	        answer: 'The combination of a function and the lexical environment within which that function was declared.'
	      }
	    ]
	  }
	}
	
	console.log('dummyData: ', dummyData)

	//AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
	
	return dummyData
} 