import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuidv4 } from 'uuid'

import { StorageKeys } from '../constants/storage-key'

export const getOrCreateGuestId = async () => {
	let guestId = await AsyncStorage.getItem(StorageKeys.GuestId)
	if (!guestId) {
		guestId = uuidv4()
		await AsyncStorage.setItem(StorageKeys.GuestId, guestId)
	}
	return guestId
}
