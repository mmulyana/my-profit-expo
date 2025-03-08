import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation } from '@tanstack/react-query'
import { Alert } from 'react-native'

import { Payload, Response } from '../types'

import { api } from '@/shared/lib/api'

export const useLogin = () => {
	return useMutation({
		mutationFn: async (payload: Payload): Promise<Response> => {
			return await api.post('/auth/login', payload)
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
