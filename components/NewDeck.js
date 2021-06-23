import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Platform, Flatlist, SafeAreaView } from 'react-native';

class NewDeck extends Component {
	// TextInput for new Deck name
	// submit button
	// redirects to Deck View
	// add Deck to DeckList
	
	state = {
		deckName: ''
	}
	
	constructor(props) {
		super(props)
		this.handleChangeText = this.handleChangeText.bind(this)
	}
	
	handleChangeText( event = {} ) => {
		const deckName = event.target && event.target.name
		const value = event.target && event.target.value
		this.setState(() =>({
			[deckName]: value 
		}))
	}
	
	render() {
		return (
			<SafeAreaView>
				<TextInput 
					name='deckname'
					onChangeText={handleChangeText}
					value={this.state.deckName}
					placeholder='Question'
				/>
			
			</SafeAreaView>
		)
	}
}

export default NewDeck