import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKeys } from '../constants/storage-key'

export const destroyToken = async () => {
	await AsyncStorage.removeItem(StorageKeys.Token)
}
