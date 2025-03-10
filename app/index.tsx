import { Alert, FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { getOrCreateGuestId } from '@/shared/utils/generate-token'
import { guestAtom } from '@/shared/store/guest'
import { Color } from '@/shared/constants/color'

import { useGetItems } from '@/features/home/hook/use-get-items'
import ButtonAdd from '@/features/home/component/button-add'
import ItemCard from '@/features/home/component/item-card'
import Header from '@/features/home/component/header'

export default function Index() {
	const [guest, setGuest] = useRecoilState(guestAtom)
	const [search, setSearch] = useState('')

	const { data } = useGetItems({ name: search })
	console.log('__DATA__', data)

	useEffect(() => {
		const checkGuest = async () => {
			const guestToken = await getOrCreateGuestId()
			if (guest === '') {
				setGuest(guestToken)
			}
		}

		checkGuest()
	}, [])

	return (
		<>
			<View style={styles.container}>
				<Header value={search} setValue={setSearch} />
				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <ItemCard {...item} />}
					style={styles.wrapper}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					ListFooterComponent={() => <View style={styles.footer}></View>}
				/>
				<ButtonAdd />
			</View>
			<StatusBar backgroundColor={Color.Primary} />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.Background,
	},
	wrapper: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		flexDirection: 'column',
		gap: 8,
	},
	separator: {
		height: 16,
	},
	footer: {
		height: 36,
	},
})
