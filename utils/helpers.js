import React from 'react'
import { 
	Text,
	View,
	StyleSheet,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native'

export function SubmitBtn({ onPress, text }) {
	return (
		<TouchableOpacity
			onPress={onPress}>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}