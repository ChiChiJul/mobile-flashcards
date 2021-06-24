import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';

class Answer extends Component {
	answer = 'The answer'
	
	// redirects to Answer Component
	showQuestion = () => {
		console.log('Show Question')
	}
	
	// dispatchs 'correct' to question 
	isCorrect = () => {
		console.log('Your guess is correct!')
	}
	
	// dipatchs 'incorrect' to question
	isIncorrect = () => {
		console.log('Your guess is incorrect')
	}
	
	render() {
		return (
			<SafeAreaView>
				{/* back arrow and Quiz */}
				<Text>
					{answer}
				</Text>
				<Text>Number of questions out of total</Text>
				<SubmitBtn onPress={this.showQuestion} text='Answer' />
				<SubmitBtn onPress={this.isCorrect} text='Correct' />
				<SubmitBtn onPress={this.isIncorrect} text='Incorrect' />
			</SafeAreaView>
		)
	}
}

export default Answer