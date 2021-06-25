import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { SubmitBtn } from '../utils/helpers'
import DeckList from './DeckList'

const Stack = createStackNavigator()

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
	
	submitNewDeck = () => {
		console.log('create a new deck')
	}
	
	render() {
		console.log('this.props: ', this.props)
		const navigation = this.props.navigation
		return (
			<SafeAreaView>
				<Text>What is the new deck name?</Text>
				<TextInput 
					name='newDeckName'
					onChangeText={this.handleChangeText}
					value={this.state.newDeckName}
					placeholder='New Deck Name'
				/>
				<SubmitBtn 
					onPress={() => {
						this.submitNewDeck
						return (() => 
							navigation.navigator('DeckList')
						)
					}}
					text='Submit' 
				/>
				<Stack.Navigator>
					<Stack.Screen name='DeckList' component={DeckList} />
				</Stack.Navigator>
			</SafeAreaView>
		)
	}
}

export default NewDeck