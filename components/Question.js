import React from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { SubmitBtn } from '../utils/helpers'
import { useNavigation } from '@react-navigation/native'
import Answer from './Answer'

function Question () {
	/*
	- back arrow, and Quiz
	- question
	- num of questions out of total
	- answer button
	- correct button
	- incorrect button
	*/
	
	const navigation = useNavigation()
	
	//const question = 'A question'
	
	// redirects to Answer Component
	const showAnswer = () => {
		console.log('Show Answer')
	}
	
	// dispatchs 'correct' to question 
	const isCorrect = () => {
		console.log('Your guess is correct!')
	}
	
	// dipatchs 'incorrect' to question
	const isIncorrect = () => {
		console.log('Your guess is incorrect')
	}
	
//	render() {
		return (
			<SafeAreaView>
				{/* back arrow and Quiz */}
				<Text>
					In the Question Component
				</Text>
				<Text>Number of questions out of total</Text>
				<SubmitBtn 
					onPress={() => navigation.navigate('Answer') } 
					text='Answer' />
				<SubmitBtn onPress={isCorrect} text='Correct' />
				<SubmitBtn onPress={isIncorrect} text='Incorrect' />
			</SafeAreaView>
		)
//	}
}

export default Question