import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'
import ImageUploader from '@/shared/component/image-uploader'
import LabeledInput from '@/shared/component/labeled-input'
import { Color } from '@/shared/constants/color'

type Props = {
	defaultValues: any
	onSubmit: (data: any) => void
	onCancel: () => void
	variant?: 'ADD' | 'EDIT'
}

export default function ItemForm({
	defaultValues,
	onSubmit,
	onCancel,
	variant,
}: Props) {
	const { control, handleSubmit } = useForm({ defaultValues })
	return (
		<View style={styles.wrapper}>
			<View style={{ gap: 8 }}>
				<Text style={styles.title}>
					{variant === 'ADD' ? 'Tambah' : 'Edit '}
				</Text>
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
					<Text style={{ color: Color.Neutral, fontWeight: '500' }}>Batal</Text>
				</Pressable>
				<Pressable style={styles.buttonSave} onPress={handleSubmit(onSubmit)}>
					<Text style={{ color: '#FFF', fontWeight: '500' }}>Simpan</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 16,
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: 1,
	},
	title: {
		fontSize: 20,
		color: Color.Neutral,
		fontWeight: '600',
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
