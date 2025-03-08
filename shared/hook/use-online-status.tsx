import NetInfo from '@react-native-community/netinfo'
import { useState, useEffect } from 'react'

export function useOnlineStatus() {
	const [isOnline, setIsOnline] = useState<boolean | null>(null)

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state) => {
			setIsOnline(state.isConnected)
		})

		return () => unsubscribe()
	}, [])

	return isOnline
}
