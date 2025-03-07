import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'

export default function RootLayout() {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: 2 } },
	})

	return (
		<QueryClientProvider client={queryClient}>
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
				<Stack.Screen
					name='setting'
					options={{
						headerShown: false,
						animationDuration: 20,
						animation: 'ios_from_right',
					}}
				/>
			</Stack>
		</QueryClientProvider>
	)
}
