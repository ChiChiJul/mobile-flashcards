import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Platform, 
	Flatlist, 
	SafeAreaView,
	TouchableOpacity
} from 'react-native';
import { SubmitBtn } from '../utils/helpers'

class Score extends Component {
	restartQuiz = () => {
		console.log('button has clicked to restart quiz')
	}
	
	backToDeck = () => {
		console.log('button has clicked to go back to deck')
	}
	
	// create button to restart quiz
	
	// create button to go back to Deck
	
	render() {
		return (
			<SubmitBtn onPress={this.restartQuiz} text={'Restart Quiz'} />
			<SubmitBtn onPress={this.backToDeck} text={'Back To Deck'} />
		)
	}
}

export default Score