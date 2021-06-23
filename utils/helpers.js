import React from 'react'

export function SubmitBtn({ onPress, text }) {
	return (
		<TouchableOpacity
			onPress={onPress}>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}