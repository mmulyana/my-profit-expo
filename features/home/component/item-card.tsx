import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Image as ImageIcon } from 'lucide-react-native'
import { useRouter } from 'expo-router'

import { BASE_URL } from '@/shared/constants/url'
import { Color } from '@/shared/constants/color'
import { Item } from '@/shared/types'

export default function ItemCard(props: Item) {
	const router = useRouter()

	const profit = (props.sellingPrice - props.purchasePrice) * props.quantity

	return (
		<Pressable onPress={() => router.push(`/detail/${props.id}`)}>
			<View style={styles.container}>
				<View style={styles.imageWrapper}>
					{props.photo ? (
						<Image
							source={{ uri: BASE_URL + props.photo }}
							style={styles.image}
						/>
					) : (
						<View style={styles.imagePlaceholder}>
							<ImageIcon color={Color.Neutral} />
						</View>
					)}
				</View>
				<View style={styles.infoWrapper}>
					<Text style={styles.infoTitle}>{props.name}</Text>
					<View>
						<Text style={styles.infoLabel}>Total profit</Text>
						<Text style={styles.infoProfit}>{profit}</Text>
					</View>
				</View>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		borderColor: Color.Border,
		borderWidth: 1,
		borderRadius: 8,
		padding: 8,
		rowGap: 8,
		backgroundColor: '#FFF',
		flexDirection: 'row',
		gap: 16,
		flex: 3,
	},
	imageWrapper: {
		flex: 1,
	},
	image: {
		width: 96,
		height: 96,
		borderRadius: 5,
	},
	imagePlaceholder: {
		width: 96,
		height: 96,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Color.ImagePlaceholder,
	},
	infoWrapper: {
		flex: 2,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		gap: 8,
	},
	infoTitle: {
		color: Color.Neutral,
		fontSize: 18,
		fontWeight: 500,
	},
	infoLabel: {
		color: Color.Neutral,
		opacity: 0.5,
		fontSize: 14,
	},
	infoProfit: {
		color: Color.Neutral,
		fontSize: 16,
	},
})
