import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'

class NewDeck extends Component {
	// TextInput for new Deck name
	// submit button
	// redirects to Deck View
	// add Deck to DeckList
	
	state = {
		newDeckName: ''
	}
	
	constructor(props) {
		super(props)
		this.handleChangeText = this.handleChangeText.bind(this)
	}
	
	handleChangeText( event = {} ) {
		const newDeckName = event.target && event.target.name
		const value = event.target && event.target.value
		this.setState(() =>({
			[newDeckName]: value 
		}))
	}
	
	submitNewQuestion = () => {
		console.log('create a new deck')
	}
	
	render() {
		return (
			<SafeAreaView>
				<Text>What is the new deck name?</Text>
				<TextInput 
					name='newDeckName'
					onChangeText={this.handleChangeText}
					value={this.state.newDeckName}
					placeholder='New Deck Name'
				/>
				<SubmitBtn onPress={this.submitNewQuestion} text='Submit' />
			</SafeAreaView>
		)
	}
}

export default NewDeck