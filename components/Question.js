import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'

class Question extends Component {
	/*
	- back arrow, and Quiz
	- question
	- num of questions out of total
	- answer button
	- correct button
	- incorrect button
	*/
	
	question = 'A question'
	
	// redirects to Answer Component
	showAnswer = () => {
		console.log('Show Answer')
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
				{question}
				</Text>
				<Text>Number of questions out of total</Text>
				<SubmitBtn onPress={this.showAnswer} text='Answer' />
				<SubmitBtn onPress={this.isCorrect} text='Correct' />
				<SubmitBtn onPress={this.isIncorrect} text='Incorrect' />
			</SafeAreaView>
		)
	}
}

export default Question