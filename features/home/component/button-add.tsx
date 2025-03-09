import { StyleSheet, TouchableOpacity } from 'react-native'
import { Plus } from 'lucide-react-native'
import { useRouter } from 'expo-router'

import { Color } from '@/shared/constants/color'

export default function ButtonAdd() {
	const router = useRouter()

	const handleAdd = () => {
		router.replace('/create')
	}

	return (
		<TouchableOpacity
			style={styles.fab}
			onPress={handleAdd}
			activeOpacity={0.7}
		>
			<Plus color='white' size={24} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		right: 16,
		bottom: 16,
		backgroundColor: Color.Primary,
		width: 56,
		height: 56,
		borderRadius: 28,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
})
