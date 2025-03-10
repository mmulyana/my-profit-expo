import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation } from '@tanstack/react-query'
import { Alert } from 'react-native'

import { destroyGuestId } from '@/shared/utils/guestId'
import { api } from '@/shared/lib/api'

import { Payload, Response } from '../types'

export const useRegister = () => {
	return useMutation({
		mutationFn: async (
			payload: Payload & { id: string }
		): Promise<Response> => {
			return await api.post('/auth/register', payload)
		},
		onSuccess: async (data) => {
			if (data.token) {
				await AsyncStorage.setItem('token', data.token)
			}
			await destroyGuestId()
		},
		onError: (err) => {
			Alert.alert(err.message)
		},
	})
}
