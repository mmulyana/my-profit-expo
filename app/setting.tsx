import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useRecoilValue } from 'recoil'
import React from 'react'

import PreferenceMenu from '@/features/setting/component/preference-menu'
import AuthCard from '@/features/setting/component/auth-card'

import DetailHeader from '@/shared/component/detail-header'
import { profileState } from '@/shared/store/profile'
import { Color } from '@/shared/constants/color'
import Section from '@/shared/component/section'
import AuthMenu from '@/features/setting/component/auth-menu'
import SettingItem from '@/features/setting/component/setting-item'
import { LogOut, Mail, User } from 'lucide-react-native'

export default function SettingScreen() {
	const profile = useRecoilValue(profileState)

	return (
		<>
			<View style={styles.container}>
				<DetailHeader
					path='/'
					right={
						<Pressable>
							<Text style={{ color: '#C94646' }}>Keluar</Text>
						</Pressable>
					}
				/>
				<View style={styles.content}>
					<View style={styles.wrapper}>
						<Text style={styles.title}>Pengaturan</Text>
						<Section title='Akun'>
							{/* <AuthCard /> */}
							{profile ? (
								<View style={styles.linkWrapper}>
									<SettingItem
										title='Email'
										icon={
											<Mail size={24} color={Color.Neutral} opacity={0.5} />
										}
										rightComponent={
											<Text style={{ color: Color.Neutral }}>
												{profile.email}
											</Text>
										}
									/>
									<SettingItem
										title='Hapus akun'
										icon={
											<LogOut size={24} color={Color.Neutral} opacity={0.5} />
										}
										style={{ borderBottomWidth: 0 }}
									/>
								</View>
							) : (
								<AuthCard />
							)}
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
	linkWrapper: {
		backgroundColor: '#FFF',
		borderRadius: 8,
		shadowColor: 'rgba(59, 58, 77, 0.10)',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 12,
		elevation: 4,
	},
})
