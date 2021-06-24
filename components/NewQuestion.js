import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'
import { NavigationContainer, createStackNavigator } from '@react-navigation/native'

class NewQuestion extends Component {
	state = {
		question: '',
		answer: ''
	}
	
	constructor(props) {
		super(props)
		this.handleChangeText = this.handleChangeText.bind(this)
	}
	
	handleChangeText( event = {} ) {
		const deckName = event.target && event.target.name
		const value = event.target && event.target.value
		this.setState(() =>({
			[deckName]: value 
		}))
	}
	
	submitNewQuestion = () => {
		console.log('submit a new question')
	}
	
	render() {
		return (
	<SafeAreaView>
		<Text>Enter your question</Text>
		<TextInput 
			name='question'
			onChangeText={this.handleChangeText}
			value={this.state.question}
			placeholder='Question'
		/>
		<Text>Enter your answer</Text>
		<TextInput 
			name='answer'
			onChangeText={this.handleChangeText}
			value={this.state.answer}
			placeholder='Answer'
		/>
		<SubmitBtn onPress={this.submitNewQuestion} text='Submit' />
	</SafeAreaView>
		)
	}
}

export default NewQuestion