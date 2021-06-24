import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'
import { NavigationContainer, createAppContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Question } from './Question'
import { NewQuestion } from './NewQuestion'

const AppNavigator = createStackNavigator()

const AppContainer = createAppContainer()

class Deck extends Component {
	/*
	- The deck title
	- Number of cards in the deck
	- Option to start a quiz for that deck
	- Option to add a new question to the deck
	*/
	
	deckTitle = 'Title'
	
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
				<Text>{this.deckTitle}</Text>
				<Text>Number of cards out of total</Text>
				<SubmitBtn 
					onPress={() => {
						this.startQuiz
						return this.props.navigation.push('Question')
					}} 
					text='Submit' 
				/>
				<SubmitBtn 
					onPress={() => {
						this.addNewQuestion
						return this.props.navigation.navigate('NewQuestion')
					}} 
					text='Add New Question' 
				/>
			</SafeAreaView>
		)
	}
}

export default Deck