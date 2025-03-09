import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Controller } from 'react-hook-form'
import { Color } from '../constants/color'

import { FakeCurrencyInput } from 'react-native-currency-input'
import { useState } from 'react'

export default function LabeledInput({
	label,
	control,
	name,
	keyboardType,
	isMasked,
}: any) {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { onChange, onBlur, value },
				fieldState: { error },
			}) => (
				<View style={styles.inputContainer}>
					<Text style={styles.label}>{label}</Text>
					{isMasked ? (
						<FakeCurrencyInput
							style={[styles.input, isFocused && styles.inputFocused]}
							onBlur={() => {
								onBlur()
								setIsFocused(false)
							}}
							onFocus={() => setIsFocused(true)}
							onChangeValue={(value) => onChange(value)}
							value={value}
							delimiter=','
							separator='.'
							precision={0}
							minValue={0}
							caretHidden
						/>
					) : (
						<TextInput
							style={[styles.input, isFocused && styles.inputFocused]}
							onBlur={() => {
								onBlur()
								setIsFocused(false)
							}}
							onFocus={() => setIsFocused(true)}
							onChangeText={onChange}
							value={value}
							keyboardType={keyboardType}
						/>
					)}
					{error && <Text style={styles.error}>{error.message}</Text>}
				</View>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	container: { padding: 20 },
	inputContainer: { marginBottom: 15 },
	label: { fontSize: 16, color: Color.Neutral },
	input: {
		borderWidth: 1,
		borderColor: Color.Border,
		paddingHorizontal: 10,
		borderRadius: 5,
		marginTop: 5,
		width: '100%',
		backgroundColor: '#FFF',
		height: 40,
	},
	inputFocused: {
		borderColor: Color.Primary,
		borderWidth: 2,
		shadowColor: 'rgba(255, 0, 0, 0.3)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 5,
	},
	error: { color: 'red', marginTop: 5 },
})
