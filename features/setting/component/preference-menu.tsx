import { ChevronRight, DollarSign, Globe, Moon } from 'lucide-react-native'
import { StyleSheet, Switch, View } from 'react-native'
import { useState } from 'react'

import { Color } from '@/shared/constants/color'

import SettingItem from './setting-item'

export default function PreferenceMenu() {
	const [isDark, setDark] = useState(false)

	const handleLanguagePress = () => {
		console.log('Language pressed')
	}

	const handleCurrencyPress = () => {
		console.log('Currency pressed')
	}

	return (
		<View style={styles.linkWrapper}>
			<SettingItem
				icon={<Globe size={24} color={Color.Neutral} opacity={0.5} />}
				title='Bahasa'
				onPress={handleLanguagePress}
				rightComponent={
					<ChevronRight size={24} color={Color.Neutral} opacity={0.5} />
				}
			/>
			<SettingItem
				icon={<Moon size={24} color={Color.Neutral} opacity={0.5} />}
				title='Mode Gelap'
				rightComponent={<Switch value={isDark} onValueChange={setDark} />}
			/>
			<SettingItem
				icon={<DollarSign size={24} color={Color.Neutral} opacity={0.5} />}
				title='Mata Uang'
				onPress={handleCurrencyPress}
				rightComponent={
					<ChevronRight size={24} color={Color.Neutral} opacity={0.5} />
				}
				style={{ borderBottomWidth: 0 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
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
