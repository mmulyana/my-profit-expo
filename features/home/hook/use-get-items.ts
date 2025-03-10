import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@tanstack/react-query'

import { useOnlineStatus } from '@/shared/hook/use-online-status'
import { API_ITEMS } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { api } from '@/shared/lib/api'
import { Item } from '@/shared/types'

export const useGetItems = ({ name }: { name?: string }) => {
	const isOnline = useOnlineStatus()

	return useQuery({
		queryKey: [Keys.Items, name],
		queryFn: async () => {
			if (!isOnline) {
				const cachedData = await AsyncStorage.getItem('items')
				return cachedData ? JSON.parse(cachedData) : []
			}

			const params = {
				...(name !== undefined && name !== '' ? { name } : {}),
			}

			const response = await api.get<{ data: Item[] }>(API_ITEMS, {
				params,
			})
			const items = response.data

			await AsyncStorage.setItem('items', JSON.stringify(items))
			return items
		},
		initialData: [],
	})
}
