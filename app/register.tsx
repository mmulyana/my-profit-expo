import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'

import LabeledInput from '@/shared/component/labeled-input'
import { guestIdState } from '@/shared/store/guest'
import { Color } from '@/shared/constants/color'

import PasswordInput from '@/features/auth/component/password-input'
import { useRegister } from '@/features/auth/hook/use-register'
import { Payload } from '@/features/auth/types'

export default function RegisterScreen() {
	const router = useRouter()
	const guest = useRecoilValue(guestIdState)
	console.log("register:guest", guest)

	const { mutate } = useRegister()
	const { control, handleSubmit } = useForm<Payload>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const submit = (data: Payload) => {
		const payload: Payload & { id: string } = {
			...data,
			id: guest,
		}
		console.log('__payload__', payload)
		mutate(payload, {
			onSuccess: () => {
				Alert.alert('Daftar berhasil')
				router.replace('/')
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
					<Text style={styles.title}>Daftar</Text>
					<Text style={styles.subtitle}>Daftarkan akun anda disini</Text>
				</View>
				<View style={{ marginTop: 24, gap: 8 }}>
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
						<Text style={{ color: '#FFF', fontWeight: 500 }}>Daftar</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.linkWrapper}>
				<Text style={styles.linkText}>Sudah punya akun? </Text>
				<Link href='/login' style={styles.linkHref}>
					Masuk
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
