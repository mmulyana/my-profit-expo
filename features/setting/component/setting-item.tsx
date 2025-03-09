import {
	StyleSheet,
	Pressable,
	StyleProp,
	ViewStyle,
	Text,
	View,
} from 'react-native'
import { Color } from '@/shared/constants/color'

type Props = {
	icon: React.ReactNode
	title: string
	onPress?: () => void
	rightComponent?: React.ReactNode
	style?: StyleProp<ViewStyle>
}
export default function SettingItem({
	icon,
	title,
	onPress,
	rightComponent,
	style,
}: Props) {
	return (
		<Pressable onPress={onPress} style={[styles.linkItemWrapper, style]}>
			<View style={styles.linkItem}>
				{icon}
				<Text>{title}</Text>
			</View>
			{rightComponent}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	linkItemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderColor: Color.Border,
	},
	linkItem: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
})
