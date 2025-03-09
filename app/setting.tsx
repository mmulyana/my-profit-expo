import { ChevronRight, DollarSign, Globe, Moon } from 'lucide-react-native'
import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'

import SettingItem from '@/features/setting/component/setting-item'
import AuthCard from '@/features/setting/component/auth-card'
import Section from '@/features/setting/component/section'

import DetailHeader from '@/shared/component/detail-header'
import { Color } from '@/shared/constants/color'

export default function SettingScreen() {
	const handleLanguagePress = () => {
		console.log('Language pressed')
	}

	const handleCurrencyPress = () => {
		console.log('Currency pressed')
	}

	return (
		<>
			<View style={styles.container}>
				<DetailHeader path='/' />
				<View style={styles.content}>
					<View style={styles.wrapper}>
						<Text style={styles.title}>Pengaturan</Text>
						<Section title='Akun'>
							<AuthCard />
						</Section>
						<Section title='Preferensi'>
							<View style={styles.linkWrapper}>
								<SettingItem
									icon={<Globe size={24} color={Color.Neutral} opacity={0.5} />}
									title='Bahasa'
									onPress={handleLanguagePress}
									rightComponent={
										<ChevronRight
											size={24}
											color={Color.Neutral}
											opacity={0.5}
										/>
									}
								/>
								<SettingItem
									icon={<Moon size={24} color={Color.Neutral} opacity={0.5} />}
									title='Mode Gelap'
									rightComponent={<Switch value={false} />}
								/>
								<SettingItem
									icon={
										<DollarSign size={24} color={Color.Neutral} opacity={0.5} />
									}
									title='Mata Uang'
									onPress={handleCurrencyPress}
									rightComponent={
										<ChevronRight
											size={24}
											color={Color.Neutral}
											opacity={0.5}
										/>
									}
									style={{ borderBottomWidth: 0 }}
								/>
							</View>
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
		justifyContent: 'space-between',
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
