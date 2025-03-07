import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import { Color } from '@/shared/constants/color'

export default function AuthCard() {
	const router = useRouter()

	const handleRegister = () => router.push('/register')

	return (
		<View style={styles.container}>
			<View style={styles.leftWrapper}>
				<Text style={styles.title}>Jangan biarkan data Anda menghilang!</Text>
				<Pressable onPress={handleRegister} style={styles.button}>
					<Text style={{ color: '#FFF' }}>Daftar</Text>
				</Pressable>
			</View>
			<Image
				source={require('@/assets/images/auth-card.png')}
				style={styles.image}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		backgroundColor: '#FFF',
		padding: 14,
		position: 'relative',
		overflow: 'hidden',
		height: 128,
		boxShadow: '0 4px 12px rgba(59,58,77,0.10)',
	},
	leftWrapper: {
		rowGap: 16,
		maxWidth: 224,
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	title: {
		fontSize: 18,
		color: Color.Neutral,
	},
	button: {
		backgroundColor: Color.Primary,
		borderRadius: 5,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	image: {
		position: 'absolute',
		right: 0,
		top: 0,
	},
})
