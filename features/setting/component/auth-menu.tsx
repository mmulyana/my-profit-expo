import { StyleSheet, Text, View } from 'react-native'
import { LogOut, Mail } from 'lucide-react-native'
import { useRecoilValue } from 'recoil'

import { profileState } from '@/shared/store/profile'
import { Color } from '@/shared/constants/color'

import SettingItem from './setting-item'

export default function AuthMenu() {
	const profile = useRecoilValue(profileState)

	return (
		<View style={styles.linkWrapper}>
			<SettingItem
				title='Email'
				icon={<Mail size={24} color={Color.Icon} />}
				rightComponent={
					<Text style={{ color: Color.Neutral }}>{profile.email}</Text>
				}
			/>
			<SettingItem
				title='Hapus akun'
				icon={<LogOut size={24} color={Color.Icon} />}
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
