import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Crypto from 'expo-crypto'

import { StorageKeys } from '../constants/storage-key'

export const getOrCreateGuestId = async () => {
	let guestId = await AsyncStorage.getItem(StorageKeys.GuestId)
	if (!guestId) {
		const date = new Date().toISOString()
		guestId = await Crypto.digestStringAsync(
			Crypto.CryptoDigestAlgorithm.SHA256,
			date
		)
		await AsyncStorage.setItem(StorageKeys.GuestId, guestId)
	}
	return guestId
}
export const destroyGuestId = async () => {
	await AsyncStorage.removeItem(StorageKeys.GuestId)
}
