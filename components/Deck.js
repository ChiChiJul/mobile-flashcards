import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'

class Deck extends Component {
	/*
	- The deck title
	- Number of cards in the deck
	- Option to start a quiz for that deck
	- Option to add a new question to the deck
	*/
	
	const deckTitle = 'Title'
	
	// redirects to Card View
	startQuiz = () => {
		console.log('Start Quiz')
	}
	
	// adds new question to Deck
	addNewQuestion = () => {
		console.log('Add New Question')
	}
	
	
	render() {
		return (
			<SafeAreaView>
				<Text>{this.dectTitle}</Text>
				<Text>Number of cards out of total</Text>
				<SubmitBtn onPress={this.startQuiz} text='Submit' />
				<SubmitBtn onPress={this.AddNewQuestion} text='Add New Question' />
			</SafeAreaView>
		)
	}
}

export default Deck