import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import { Settings } from 'lucide-react-native'

import { Color } from '@/shared/constants/color'
import { useRouter } from 'expo-router'

type Props = {
	value: string
	setValue: (val: string) => void
}
export default function Header({ value, setValue }: Props) {
	const router = useRouter()
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.searchWrapper}>
					<TextInput
						placeholder='Cari data'
						value={value}
						onChangeText={setValue}
						style={styles.input}
					/>
				</View>
				<Pressable
					style={styles.button}
					onPress={() => router.push('/setting')}
				>
					<Settings size={20} color='white' />
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.Primary,
		paddingHorizontal: 16,
		height: 56,
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
	},
	wrapper: {
		flex: 4,
		gap: 16,
		flexDirection: 'row',
		width: 'auto',
	},
	searchWrapper: {
		flex: 3,
		width: '100%',
	},
	input: {
		height: 40,
		backgroundColor: '#FFF',
		paddingHorizontal: 8,
		borderRadius: 8,
	},
	button: {
		backgroundColor: 'transparent',
		padding: 8,
		height: 32,
		width: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
