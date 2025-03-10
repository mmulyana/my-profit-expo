import { LogOut, Mail, View } from 'lucide-react-native'
import SettingItem from './setting-item'
import { useRecoilValue } from 'recoil'
import { profileState } from '@/shared/store/profile'
import { StyleSheet, Text } from 'react-native'
import { Color } from '@/shared/constants/color'

export default function AuthMenu() {
	const profile = useRecoilValue(profileState)

	return (
		<View style={styles.linkWrapper}>
			<SettingItem
				icon={<Mail size={24} color={Color.Neutral} opacity={0.5} />}
				title='Email'
				rightComponent={<Text>{profile.email}</Text>}
			/>
			<SettingItem
				icon={<LogOut size={24} color={Color.Neutral} opacity={0.5} />}
				title='Email'
				rightComponent={<Text>{profile.email}</Text>}
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
