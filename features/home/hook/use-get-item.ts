import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@tanstack/react-query'

import { API_ITEMS } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { api } from '@/shared/lib/api'
import { Item } from '@/shared/types'

export const useGetItem = (id?: string) => {
	return useQuery({
		queryKey: [Keys.Items, id],
		queryFn: async () => {
			const response = await api.get<{ data: Item }>(`${API_ITEMS}/${id}`)
			const items = response.data
			return items
		},
		enabled: id !== null && id !== undefined && id !== '',
	})
}
