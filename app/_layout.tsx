import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { RecoilRoot } from 'recoil'

export default function RootLayout() {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: 2 } },
	})

	return (
		<RecoilRoot>
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
					<Stack.Screen
						name='login'
						options={{
							headerShown: false,
							animation: 'ios_from_right',
						}}
					/>
					<Stack.Screen
						name='register'
						options={{
							headerShown: false,
							animation: 'ios_from_left',
						}}
					/>
					<Stack.Screen
						name='detail/[id]/index'
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name='detail/[id]/edit'
						options={{
							headerShown: false,
						}}
					/>
				</Stack>
			</QueryClientProvider>
		</RecoilRoot>
	)
}
