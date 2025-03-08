import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation } from '@tanstack/react-query'
import { Alert } from 'react-native'

import { api } from '@/shared/lib/api'

import { Payload, Response } from '../types'

export const useRegister = () => {
	return useMutation({
		mutationFn: async (payload: Payload): Promise<Response> => {
			return await api.post('/auth/register', payload)
		},
		onSuccess: async (data) => {
			if (data.token) {
				await AsyncStorage.setItem('token', data.token)
			}
		},
		onError: (err) => {
			Alert.alert(err.message)
		},
	})
}
