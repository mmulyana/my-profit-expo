import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@tanstack/react-query'

import { useOnlineStatus } from '@/shared/hook/use-online-status'
import { API_ITEMS } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { api } from '@/shared/lib/api'
import { Item } from '@/shared/types'

export const useGetItems = ({
	name,
	userId,
}: {
	name?: string
	userId?: string
}) => {
	return useQuery({
		queryKey: [Keys.Items, name],
		queryFn: async () => {
			const params = {
				...(name !== undefined && name !== '' ? { name } : {}),
				...(userId !== undefined && userId !== '' ? { userId } : {}),
			}

			const response = await api.get<{ data: Item[] }>(API_ITEMS, {
				params,
			})
			return response.data
		},
		initialData: [],
		enabled: userId !== null && userId !== undefined && userId !== '',
	})
}
