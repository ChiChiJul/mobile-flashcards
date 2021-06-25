import { RECEIVE_DECKS } from '../actions'

function entries(state = {}, action) {
	console.log('in reducer. entries()')
	switch (action.type) {
		case RECEIVE_DECKS :
			return {
				...state, // state as is
				...action.decks // merging entries to state above
			}
		default :
			return state
	}
}

export default entries