import { Text, StyleSheet } from 'react-native'
import { Color } from '../constants/color'

type Props = {
	amount: number
	currency?: string
}

export default function CurrencyText({ amount, currency = 'IDR' }: Props) {
	const formatCurrency = (value: number, currencyCode: string) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currencyCode,
		}).format(value)
	}

	return (
		<Text style={styles.text}>
			{formatCurrency(amount, currency).slice(0, -3)}
		</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		// fontWeight: 500,
		color: Color.Neutral,
	},
})
