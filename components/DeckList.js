import React, { Component } from 'react'
import { 
	Text, View, StyleSheet, Platform, TouchableOpacity, SafeAreaView 
} from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'
import { fetchAllDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {
	componentDidMount() {
		console.log('this.props: ', this.props)
		const { dispatch } = this.props
		
		fetchAllDecks()
			.then((decks) => dispatch(receiveDecks(decks)))
	}
	render() {
		console.log('this.props.state: ', this.props.state)
		
		const decks = this.props.state
		console.log('tyoe of decks: ', typeof(decks))
		console.log('decks: ', JSON.parse(decks))
		
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
	//console.log('state: ', JSON.parse(state));
	return {
		state
	}
}

export default connect(mapStateToProps)(DeckList)