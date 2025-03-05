import { useMutation, useQueryClient } from '@tanstack/react-query'

import { API_ITEMS } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'

export const useCreateItem = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (payload: any) => {
			return await fetch(API_ITEMS, {
				method: 'POST',
				body: payload,
			})
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [Keys.Items] })
		},
		onError: (err: any) => {
			console.log(err)
		},
	})
}
