import { StyleSheet, Text, View } from 'react-native'
import { format } from 'date-fns'

import { Color } from '@/shared/constants/color'
import { Item } from '@/shared/types'

export default function ItemCard(props: Item) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>{props.name}</Text>
				<Text style={styles.date}>
					{format(new Date(props.createdAt), 'dd/mm/yy')}
				</Text>
			</View>
			<View style={styles.wrapper}>
				<View style={styles.item}>
					<Text style={styles.itemLabel}>Harga beli</Text>
					<Text style={styles.itemValue}>{props.purchasePrice}</Text>
				</View>
				<View style={styles.item}>
					<Text style={styles.itemLabel}>Harga jual</Text>
					<Text style={styles.itemValue}>{props.sellingPrice}</Text>
				</View>
				<View style={styles.item}>
					<Text style={styles.itemLabel}>Kuantitas</Text>
					<Text style={styles.itemValue}>{props.quantity}</Text>
				</View>
			</View>
			<View style={styles.profitWrapper}>
				<Text style={styles.profitLabel}>Profit</Text>
				<Text style={styles.profitValue}>
					{props.sellingPrice - props.purchasePrice}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderColor: Color.Border,
		borderWidth: 1,
		borderRadius: 8,
		padding: 16,
		rowGap: 8,
		backgroundColor: '#FFF',
	},
	header: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 8
	},
	title: {
		fontSize: 16,
		fontWeight: 600,
		color: Color.Neutral,
	},
	date: {
		fontSize: 14,
		color: Color.Neutral,
		opacity: 0.5
	},
	wrapper: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	item: {
		rowGap: 8,
	},
	itemLabel: {
		fontSize: 12,
		color: Color.Neutral,
		opacity: 0.5,
	},
	itemValue: {
		fontSize: 16,
		color: Color.Neutral,
	},
	itemLink: {
		color: Color.Primary,
		fontWeight: 600,
		fontSize: 14,
		textAlign: 'left',
	},
	profitWrapper: {
		paddingTop: 12,
		borderTopColor: Color.Border,
		borderStyle: 'dashed',
		borderTopWidth: 1,
		width: '100%',
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	profitLabel: {
		fontSize: 14,
		color: Color.Neutral,
		opacity: 0.5,
	},
	profitValue: {
		fontWeight: 600,
		fontSize: 18,
		color: Color.Neutral,
	},
})
