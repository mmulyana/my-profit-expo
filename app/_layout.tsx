import { Stack } from 'expo-router'

export default function RootLayout() {
	return (
		<>
			<Stack>
				<Stack.Screen
					name='index'
					options={{ headerShown: false, animation: 'ios_from_left' }}
				/>
				<Stack.Screen
					name='create'
					options={{
						animation: 'ios_from_right',
						animationDuration: 20,
						headerShown: false,
					}}
				/>
			</Stack>
		</>
	)
}
