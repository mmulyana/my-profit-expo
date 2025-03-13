import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList, StatusBar, StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { destroyGuestId, getOrCreateGuestId } from '@/shared/utils/guestId'
import { StorageKeys } from '@/shared/constants/storage-key'
import { useProfile } from '@/shared/hook/use-profile'
import { profileAtom } from '@/shared/store/profile'
import { guestAtom } from '@/shared/store/guest'
import { Color } from '@/shared/constants/color'

import { useGetItems } from '@/features/home/hook/use-get-items'
import ButtonAdd from '@/features/home/component/button-add'
import ItemCard from '@/features/home/component/item-card'
import Header from '@/features/home/component/header'

export default function Index() {
	const [guest, setGuest] = useRecoilState(guestAtom)
	const [profile, setProfile] = useRecoilState(profileAtom)
	const [search, setSearch] = useState('')

	const { data } = useGetItems({ name: search, userId: profile.id || guest })
	const { data: profileData } = useProfile()

	useEffect(() => {
		const checkGuest = async () => {
			const token = await AsyncStorage.getItem(StorageKeys.Token)
			if (!guest && !token && !profile.id) {
				const guestToken = await getOrCreateGuestId()
				setGuest(guestToken)
			}
			if (guest && (token || profile.id)) {
				setGuest('')
				await destroyGuestId()
			}
		}

		checkGuest()
	}, [guest, profile.id])

	useEffect(() => {
		if (!profileData) return

		const checkProfile = async () => {
			const token = await AsyncStorage.getItem(StorageKeys.Token)
			if (token && profileData.id !== profile.id) {
				setProfile(profileData)
			}
		}

		checkProfile()
	}, [profileData, profile.id])

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
