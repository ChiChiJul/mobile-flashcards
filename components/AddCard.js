import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'

class AddCard extends Component {
	// question field
	// answer field
	// submit button'=
	
	// 1. dispatches the new question to AddNewQuestion action
	// 2. redirects to Deck View 
	
	state = {
		question: '',
		answer: ''
	}
	
	constructor(props) {
		super(props)
		//this.handleChangeText = this.handleChangeText(this)
	}
	
	onChangeText(event = {}) {
		if (event.name === 'question') {
			const question = event.target && event.target.name
			this.setState(() => ([question]: value))
		}
		if (event.name === 'answer') {
			const answer = event.target && event.target.name
			this.setState(() => ([answer]: value))
		}
	}
	
	// adds question to Deck
	// redirects to Deck View
	submit = () => {
		console.log('Submit button is clicked')
	}
	
	render() {
		return (
			<SafeAreaView>
				<TextInput
					name='question'
					onChangeText={this.onChangeText}
					value={this.state.question}
					placeholder='Question'
				/>
				<TextInput
					name='answer'
					onChangeText={this.onChangeText}
					value={this.state.answer}
					placeholder='Answer'
				/>
				<SubmitBtn onPress={this.submit} text={'Submit'} />
			</SafeAreaView>
		)
	}
}

export default AddCard