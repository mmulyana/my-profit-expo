import { useMutation, useQueryClient } from '@tanstack/react-query'

import { API_ITEMS } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { api } from '@/shared/lib/api'

export const useDeleteItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (id?: string) => {
			return await api.delete(`${API_ITEMS}/${id}`)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [Keys.Items] })
		},
		onError: (err: any) => {
			console.log('__ERROR__', err)
		},
	})
}
