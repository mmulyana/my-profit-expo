import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useRecoilState } from 'recoil'
import React from 'react'

import PreferenceMenu from '@/features/setting/component/preference-menu'
import AuthMenu from '@/features/setting/component/auth-menu'
import AuthCard from '@/features/setting/component/auth-card'

import DetailHeader from '@/shared/component/detail-header'
import { profileAtom, profileState } from '@/shared/store/profile'
import { Color } from '@/shared/constants/color'
import Section from '@/shared/component/section'
import { destroyToken } from '@/shared/utils/auth'
import { getOrCreateGuestId } from '@/shared/utils/guestId'

export default function SettingScreen() {
	const [profile, setProfile] = useRecoilState(profileAtom)

	const onLogout = async () => {
		setProfile({ id: null, email: '', currency: '', i18n: '', theme: '' })
		await destroyToken()
		await getOrCreateGuestId()
	}

	return (
		<>
			<View style={styles.container}>
				<DetailHeader
					path='/'
					right={
						profile.id && (
							<Pressable onPress={onLogout}>
								<Text style={{ color: '#C94646' }}>Keluar</Text>
							</Pressable>
						)
					}
				/>
				<View style={styles.content}>
					<View style={styles.wrapper}>
						<Text style={styles.title}>Pengaturan</Text>
						<Section title='Akun'>
							{profile.id ? <AuthMenu /> : <AuthCard />}
						</Section>
						<Section title='Preferensi'>
							<PreferenceMenu />
						</Section>
					</View>
				</View>
			</View>
			<StatusBar backgroundColor='transparent' />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.Background,
		flex: 1,
	},
	content: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	wrapper: {
		padding: 16,
		flexDirection: 'column',
		gap: 24,
		flex: 1,
	},
	title: {
		fontSize: 20,
		color: Color.Neutral,
		fontWeight: '600',
	},
})
