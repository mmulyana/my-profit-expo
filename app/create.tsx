import { View, StatusBar, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useRecoilValue } from 'recoil'

import { useCreateItem } from '@/features/home/hook/use-create-item'
import DetailHeader from '@/shared/component/detail-header'
import { Color } from '@/shared/constants/color'
import { guestIdState } from '@/shared/store/guest'
import { profileState } from '@/shared/store/profile'
import ItemForm from '@/shared/component/item-form'

export default function CreateScreen() {
	const router = useRouter()
	const guest = useRecoilValue(guestIdState)
	const profile = useRecoilValue(profileState)
	const { mutate } = useCreateItem()

	const defaultValues = {
		name: '',
		purchasePrice: undefined,
		sellingPrice: undefined,
		quantity: undefined,
		image: null,
	}

	const onSubmit = (data: any) => {
		const formData = new FormData()
		formData.append('name', data.name)
		formData.append('purchasePrice', data.purchasePrice)
		formData.append('quantity', data.quantity)
		formData.append('sellingPrice', data.sellingPrice)
		formData.append('userId', profile.id || guest)

		if (data.image) {
			const imageUri = data.image.uri || data.image
			const fileType = imageUri.split('.').pop()
			formData.append('photo', {
				uri: imageUri,
				name: `photo.${fileType}`,
				type: `image/${fileType}`,
			} as any)
		}

		mutate(formData, {
			onSuccess: () => router.replace('/'),
		})
	}

	const onCancel = () => router.push('/')

	return (
		<>
			<View style={styles.container}>
				<DetailHeader path='/' />
				<ItemForm
					defaultValues={defaultValues}
					onSubmit={onSubmit}
					onCancel={onCancel}
					variant='ADD'
				/>
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
})
