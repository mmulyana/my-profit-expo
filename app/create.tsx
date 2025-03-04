import DetailHeader from '@/shared/component/detail-header'
import LabeledInput from '@/shared/component/labeled-input'
import { Color } from '@/shared/constants/color'

import {
	Button,
	Pressable,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'expo-router'
import ImageUploader from '@/shared/component/image-uploader'

const formSchema = z.object({
	name: z.string().min(1, 'Nama harus diisi'),
	sellingPrice: z.string().min(1, 'Harga harus lebih dari 0'),
	purchasePrice: z.string().min(1, 'Harga harus lebih dari 0'),
	quantity: z.string().min(1, 'Jumlah harus lebih dari 0'),
	image: z.string().optional(),
})

export default function CreateScreen() {
	const router = useRouter()

	const { control, handleSubmit } = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			purchasePrice: undefined,
			sellingPrice: undefined,
		},
	})

	const onSubmit = (data: any) => {
		console.log(data)
	}

	const onCancel = () => router.push('/')

	return (
		<>
			<View style={styles.container}>
				<DetailHeader path='/' />
				<View style={styles.wrapper}>
					<View
						style={{
							gap: 8,
						}}
					>
						<Text style={styles.title}>Tambah Data</Text>
						<LabeledInput
							label='Nama'
							control={control}
							name='name'
							keyboardType='default'
						/>
						<LabeledInput
							label='Harga Beli'
							control={control}
							name='purchasePrice'
							keyboardType='numeric'
							isMasked
						/>
						<LabeledInput
							label='Harga Jual'
							control={control}
							name='sellingPrice'
							keyboardType='numeric'
							isMasked
						/>
						<LabeledInput
							label='Jumlah'
							control={control}
							name='quantity'
							keyboardType='numeric'
						/>
						<ImageUploader control={control} />
					</View>
					<View style={styles.submitWrapper}>
						<Pressable style={styles.buttonCancel} onPress={onCancel}>
							<Text style={{ color: Color.Neutral, fontWeight: 500 }}>
								Batal
							</Text>
						</Pressable>
						<Pressable
							style={styles.buttonSave}
							onPress={handleSubmit(onSubmit)}
						>
							<Text style={{ color: '#FFF', fontWeight: 500 }}>Simpan</Text>
						</Pressable>
					</View>
				</View>
			</View>
			<StatusBar backgroundColor='#FFF' />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.Background,
		flex: 1,
	},
	wrapper: {
		padding: 16,
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: 1,
	},
	title: {
		fontSize: 20,
		color: Color.Neutral,
		fontWeight: 600,
		marginBottom: 16,
	},
	submitWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 16,
	},
	buttonSave: {
		backgroundColor: Color.Primary,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
		paddingVertical: 12,
		borderRadius: 8,
	},
	buttonCancel: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
		paddingVertical: 12,
		borderRadius: 8,
	},
})
