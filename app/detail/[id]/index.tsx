import {
	Image,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'

import { useDeleteItem } from '@/features/detail/hook/use-delete-item'
import { useGetItem } from '@/features/home/hook/use-get-item'

import DetailHeader from '@/shared/component/detail-header'
import CurrencyText from '@/shared/component/currency-text'
import Section from '@/shared/component/section'
import { Color } from '@/shared/constants/color'
import { BASE_URL } from '@/shared/constants/url'

export default function DetailScreen() {
	const router = useRouter()
	const { id } = useLocalSearchParams()

	const { data } = useGetItem(id as string)
	const { mutate: destroy } = useDeleteItem()

	const diff = data ? data?.sellingPrice - data?.purchasePrice : 0
	const profit = data ? diff * data?.quantity : 0

	return (
		<>
			<View style={styles.container}>
				<DetailHeader
					path='/'
					right={
						<Pressable onPress={() => router.push(`/detail/${id}/edit`)}>
							<Text>Edit</Text>
						</Pressable>
					}
				/>
				<View style={styles.wrapper}>
					<Text style={styles.title}>{data?.name}</Text>
					{data?.photo && (
						<Image
							source={{ uri: BASE_URL + data.photo }}
							style={styles.image}
						/>
					)}
					<Section title='Detail'>
						<View style={styles.detailWrapper}>
							<View style={styles.detailItemWrapper}>
								<Text style={styles.detailLabel}>Harga beli</Text>
								<CurrencyText amount={data?.purchasePrice || 0} />
							</View>
							<View style={styles.detailItemWrapper}>
								<Text style={styles.detailLabel}>Harga jual</Text>
								<CurrencyText amount={data?.sellingPrice || 0} />
							</View>
							<View style={styles.detailItemWrapper}>
								<Text style={styles.detailLabel}>Kuantitas</Text>
								<Text style={styles.detailValue}>{data?.quantity}</Text>
							</View>
							<View style={styles.line} />
							<View style={styles.detailItemWrapper}>
								<Text style={styles.detailLabel}>Selisih</Text>
								<CurrencyText amount={diff || 0} />
							</View>
							<View style={styles.detailItemWrapper}>
								<Text style={styles.detailLabel}>Total</Text>
								<CurrencyText amount={profit || 0} />
							</View>
						</View>
					</Section>
				</View>
				<View style={styles.buttonWrapper}>
					<Pressable
						style={styles.buttonDelete}
						onPress={() => {
							destroy(id as string, {
								onSuccess: () => router.replace('/'),
							})
						}}
					>
						<Text style={{ color: '#C94646', fontSize: 16 }}>hapus</Text>
					</Pressable>
				</View>
			</View>
			<StatusBar backgroundColor='transparent' />
		</>
	)
}

const styles = StyleSheet.create({
	buttonWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 14,
	},
	buttonDelete: {
		backgroundColor: 'rgba(201, 70, 70, 0.3)',
		paddingVertical: 14,
		paddingHorizontal: 48,
		borderRadius: 8,
	},
	container: {
		backgroundColor: Color.Background,
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	wrapper: {
		padding: 16,
		flex: 1,
		gap: 16,
	},
	title: {
		fontSize: 18,
		color: Color.Neutral,
		fontWeight: 500,
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 8,
		marginBottom: 8,
	},
	imagePlaceholder: {
		width: '100%',
		height: 200,
		borderRadius: 8,
		backgroundColor: Color.ImagePlaceholder,
		marginBottom: 8,
	},
	detailWrapper: {
		gap: 16,
		backgroundColor: '#FFF',
		padding: 16,
		borderRadius: 8,
		boxShadow: '0 4 12 0 rgba(59, 58, 77, 0.1)',
	},
	detailItemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	detailLabel: {
		color: Color.Neutral,
		opacity: 0.5,
	},
	detailValue: {
		color: Color.Neutral,
	},
	line: {
		borderBottomColor: Color.Neutral,
		borderStyle: 'dashed',
		borderBottomWidth: 1,
		opacity: 0.5,
	},
})
