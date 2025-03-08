import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { Link, useRouter } from 'expo-router'

import PasswordInput from '@/features/auth/component/password-input'

import LabeledInput from '@/shared/component/labeled-input'
import { Color } from '@/shared/constants/color'
import { Payload } from '@/features/auth/types'
import { useLogin } from '@/features/auth/hook/use-login'

export default function RegisterScreen() {
	const router = useRouter()

	const { mutate } = useLogin()
	const { control, handleSubmit } = useForm<Payload>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const submit = (data: Payload) => {
		mutate(data, {
			onSuccess: () => {
				router.push('/')
			},
		})
	}

	return (
		<View style={styles.container}>
			<View>
				<View style={styles.header}>
					<Image
						source={require('@/assets/images/logo.png')}
						style={styles.image}
					/>
					<Text style={styles.title}>Masuk</Text>
					<Text style={styles.subtitle}>Masuk dengan akun anda</Text>
				</View>
				<View style={{ marginTop: 24 }}>
					<LabeledInput
						label='Email'
						control={control}
						name='email'
						keyboardType='default'
					/>
					<PasswordInput control={control} name='password' />
					<Pressable
						style={styles.buttonSubmit}
						onPress={() => handleSubmit(submit)()}
					>
						<Text style={{ color: '#FFF', fontWeight: 500 }}>Masuk A</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.linkWrapper}>
				<Text style={styles.linkText}>Belum punya akun? </Text>
				<Link href='/register' style={styles.linkHref}>
					Daftar
				</Link>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: Color.Background,
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: 8,
	},
	header: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 40,
	},
	title: {
		color: Color.Neutral,
		fontSize: 20,
		fontWeight: 600,
		marginTop: 16,
	},
	subtitle: {
		color: Color.Neutral,
		opacity: 0.5,
		fontSize: 16,
		marginTop: 4,
	},
	buttonSubmit: {
		backgroundColor: Color.Primary,
		paddingVertical: 14,
		paddingHorizontal: 16,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 8,
	},
	image: {
		width: 40,
		height: 64,
	},
	linkWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	linkText: {
		color: Color.Neutral,
		opacity: 0.5,
	},
	linkHref: {
		color: Color.Primary,
		fontWeight: 500,
	},
})
