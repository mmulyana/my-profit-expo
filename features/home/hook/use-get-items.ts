import { useQuery } from '@tanstack/react-query'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useOnlineStatus } from '@/shared/hook/use-online-status'
import { API_ITEMS } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { api } from '@/shared/lib/api'

export const useGetItems = () => {
	const isOnline = useOnlineStatus()

	return useQuery({
		queryKey: [Keys.Items],
		queryFn: async () => {
			if (!isOnline) {
				const cachedData = await AsyncStorage.getItem('items')
				return cachedData ? JSON.parse(cachedData) : []
			}

			const response = await api.get<any>(API_ITEMS)
			const items = response.data

			await AsyncStorage.setItem('items', JSON.stringify(items))
			return items
		},
		initialData: [],
	})
}
