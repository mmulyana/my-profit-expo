import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'
import { Controller } from 'react-hook-form'
import { Color } from '../constants/color'

export default function LabeledInput({
	label,
	control,
	name,
	keyboardType,
	isMasked,
}: any) {
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
						<MaskedTextInput
							style={styles.input}
							onBlur={onBlur}
							onChangeText={onChange}
							value={String(value)}
							keyboardType={keyboardType}
							mask='Rp 999,999,999,999'
						/>
					) : (
						<TextInput
							style={styles.input}
							onBlur={onBlur}
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
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		backgroundColor: '#FFF',
	},
	error: { color: 'red', marginTop: 5 },
})
