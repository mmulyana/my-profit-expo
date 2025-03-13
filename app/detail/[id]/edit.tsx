import { View, StatusBar, StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useRecoilValue } from 'recoil'

import { useUpdateItem } from '@/features/detail/hook/use-update-item'
import { useGetItem } from '@/features/home/hook/use-get-item'

import DetailHeader from '@/shared/component/detail-header'
import { profileState } from '@/shared/store/profile'
import ItemForm from '@/shared/component/item-form'
import { guestIdState } from '@/shared/store/guest'
import { Color } from '@/shared/constants/color'

export default function EditScreen() {
	const { id } = useLocalSearchParams()
	const router = useRouter()

	const guest = useRecoilValue(guestIdState)
	const profile = useRecoilValue(profileState)

	const { mutate } = useUpdateItem(id as string)
	const { data } = useGetItem(id as string)

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
			onSuccess: () => router.replace(`/detail/${id}`),
		})
	}

	const onCancel = () => router.push(`/detail/${id}`)

	return (
		<>
			<View style={styles.container}>
				<DetailHeader path={`/detail/${id}`} />
				<ItemForm
					defaultValues={{
						name: data?.name,
						purchasePrice: data?.purchasePrice,
						sellingPrice: data?.sellingPrice,
						quantity: String(data?.quantity),
						image: null,
					}}
					onSubmit={onSubmit}
					onCancel={onCancel}
					variant='EDIT'
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
