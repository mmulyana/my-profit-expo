import { useMutation, useQueryClient } from '@tanstack/react-query'

import { API_ITEMS } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { api } from '@/shared/lib/api'

export const useUpdateItem = (id?: string) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (payload: any) => {
			return await api.patch(`${API_ITEMS}/${id}`, payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				isMultipart: true,
			})
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [Keys.Items] })
		},
		onError: (err: any) => {
			console.log('__ERROR__', err)
		},
	})
}
