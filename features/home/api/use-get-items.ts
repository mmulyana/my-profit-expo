import { Keys } from '@/shared/constants/key'
import { API_ITEMS } from '@/shared/constants/url'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetItems = () => {
	return useQuery({
		queryKey: [Keys.Items],
		queryFn: async () => {
			return axios(API_ITEMS)
		},
	})
}
