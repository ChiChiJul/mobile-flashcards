import React, { Component } from 'react'
import { 
	Text, View, StyleSheet, Platform, TouchableOpacity, SafeAreaView 
} from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'
import { fetchAllDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {
	//console.log('this.props: ', this.props)
	componentDidMount() {
		const { dispatch } = this.props
		
		fetchAllDecks()
			.then((decks) => dispatch(receiveDecks(decks)))
	}
	render() {
		console.log('this.props: ', this.props)
		return (
			<SafeAreaView>
				<Deck />
			<Text>
				Hello
			</Text>
			</SafeAreaView>
			)
	}
}

function mapStateToProps(state) {
	console.log('state: ', state)
	return {
		state
	}
}

export default connect(mapStateToProps)(DeckList)