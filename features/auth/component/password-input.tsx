import { Eye, EyeOff } from 'lucide-react-native'
import { Controller } from 'react-hook-form'
import { useState } from 'react'
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'

import { Color } from '@/shared/constants/color'

export default function PasswordInput({
	label = 'Password',
	control,
	name,
}: any) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)
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
					<View style={[styles.inputWrapper, isFocused && styles.inputFocused]}>
						<TextInput
							style={styles.input}
							onBlur={() => {
								onBlur()
								setIsFocused(false)
							}}
							onFocus={() => setIsFocused(true)}
							onChangeText={onChange}
							value={value}
							secureTextEntry={!isPasswordVisible}
						/>
						<TouchableOpacity
							onPress={() => setIsPasswordVisible((prev) => !prev)}
							style={styles.iconButton}
						>
							{isPasswordVisible ? (
								<EyeOff size={20} color={Color.Neutral} />
							) : (
								<Eye size={20} color={Color.Neutral} />
						)}
						</TouchableOpacity>
					</View>
					{error && <Text style={styles.error}>{error.message}</Text>}
				</View>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	inputContainer: { marginBottom: 15 },
	label: { fontSize: 16, color: Color.Neutral },
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Color.Border,
		paddingHorizontal: 10,
		borderRadius: 5,
		marginTop: 5,
		width: '100%',
		backgroundColor: '#FFF',
		height: 40,
	},
	input: {
		flex: 1,
	},
	inputFocused: {
		borderColor: Color.Primary,
		borderWidth: 2,
	},
	iconButton: {
		marginLeft: 10,
	},
	error: { color: 'red', marginTop: 5 },
})
