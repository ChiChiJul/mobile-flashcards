import React, { Component } from 'react'
import { 
	Text, View, StyleSheet, Platform, TouchableOpacity, SafeAreaView 
} from 'react-native'
import Deck from './Deck'

class DeckList extends Component {
	//console.log('this.props: ', this.props)
	render() {
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

export default DeckList