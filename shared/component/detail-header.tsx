import { View, Text, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import { useRouter } from 'expo-router'
import React from 'react'
import { Color } from '../constants/color'

type Props = {
	path: string
	title?: string
	right?: React.ReactNode
}
export default function DetailHeader({ path, title, right }: Props) {
	const router = useRouter()

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingHorizontal: 16,
				paddingVertical: 16,
				height: 56,
			}}
		>
			<TouchableOpacity
				onPress={() => router.replace(path as any)}
				style={{ flexDirection: 'row', gap: 8 }}
			>
				<ChevronLeft size={24} color={Color.Neutral} />
				<Text
					style={{
						fontSize: 16,
						color: Color.Neutral,
					}}
				>
					{title || 'Kembali'}
				</Text>
			</TouchableOpacity>
			{right}
		</View>
	)
}
