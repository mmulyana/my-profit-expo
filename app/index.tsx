import { FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { useState } from 'react'

import { Color } from '@/shared/constants/color'
import { Item } from '@/shared/types'

import ItemCard from '@/features/home/component/item-card'
import Header from '@/features/home/component/header'
import ButtonAdd from '@/features/home/component/button-add'
import { useGetItems } from '@/features/home/api/use-get-items'

export default function Index() {
	const [search, setSearch] = useState('')

	const { data } = useGetItems()
	console.log('data', data?.data)

	return (
		<>
			<View style={styles.container}>
				<Header value={search} setValue={setSearch} />
				<FlatList
					data={data?.data.data}
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
