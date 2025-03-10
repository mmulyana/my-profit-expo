import { useQuery } from '@tanstack/react-query'

import { API_PROFILE } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { Profile } from '@/shared/types'
import { api } from '@/shared/lib/api'

export const useProfile = () => {
	return useQuery({
		queryKey: [Keys.Profile],
		queryFn: async () => {
			const response = await api.get<{ data: Profile }>(API_PROFILE, {
				auth: true,
			})
			return response.data
		},
	})
}
