import { StyleSheet, Text, View } from 'react-native'

import { Color } from '@/shared/constants/color'

type Props = {
	title: string
	children: React.ReactNode
}
export default function Section({ title, children }: Props) {
	return (
		<View style={styles.sectionWrapper}>
			<Text style={styles.sectionTitle}>{title}</Text>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	sectionTitle: {
		fontSize: 16,
		color: Color.Neutral,
		opacity: 0.5,
	},
	sectionWrapper: {
		gap: 16,
	},
})
