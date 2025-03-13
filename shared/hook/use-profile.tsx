import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { StorageKeys } from '../constants/storage-key'

import { API_PROFILE } from '@/shared/constants/url'
import { Keys } from '@/shared/constants/key'
import { Profile } from '@/shared/types'
import { api } from '@/shared/lib/api'

export const useProfile = () => {
	const [isTokenExist, setIsTokenExist] = useState(false)
	useEffect(() => {
		if (isTokenExist) return
		const checkToken = async () => {
			const token = await AsyncStorage.getItem(StorageKeys.Token)
			if (token) {
				setIsTokenExist(true)
			}
		}
		checkToken()
	}, [isTokenExist])

	return useQuery({
		queryKey: [Keys.Profile],
		queryFn: async () => {
			const response = await api.get<{ data: Profile }>(API_PROFILE, {
				auth: true,
			})
			return response.data
		},
		enabled: isTokenExist,
	})
}
