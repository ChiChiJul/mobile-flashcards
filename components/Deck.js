import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import { connect } from 'react-redux'
import Question from './Question'
import AddCard from './AddCard'
import DeckList from './DeckList'
import NewQuestion from './NewQuestion'


const Stack = createStackNavigator()

//const AppContainer = createAppContainer()

function Deck () {
	const navigation = useNavigation()
//class Deck extends Component {
	/*
	- The deck title
	- Number of cards in the deck
	- Option to start a quiz for that deck
	- Option to add a new question to the deck
	*/
	
	const deckTitle = 'Title'
	
	// redirects to Card View
	/*startQuiz = () => {
		console.log('Start Quiz')
	}*/
	
	// adds new card to Deck
	const addCard = () => {
		console.log('Add New Question')
	}
	

	console.log('navigation: ', navigation)
	
	
	/*render() {
		console.log('this.props: ', this.props)*/
		return (
			<SafeAreaView>
				<Text>{deckTitle}</Text>
				<Text>Number of cards out of total</Text>
				<SubmitBtn 
					onPress={() => navigation.navigate('Question') } 
					text='Start Quiz' 
				/>
				<SubmitBtn 
					onPress={() => navigation.navigate('AddCard') } 
					text='Add Card' 
				/>
				<Stack.Navigator>
					<Stack.Screen name="Question" component={Question} />
					<Stack.Screen name="AddCard" component={AddCard} />
				</Stack.Navigator>
			</SafeAreaView>
		)
	}
	{/*}*/}

/*function mapStateToProps (state) {
	console.log('state: ', state)
	
	return {
		state
	}
}*/

export default (Deck)


