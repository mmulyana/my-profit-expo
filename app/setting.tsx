import { ChevronRight, DollarSign, Globe, Moon } from 'lucide-react-native'
import {
	Pressable,
	StatusBar,
	StyleSheet,
	Switch,
	Text,
	View,
} from 'react-native'

import AuthCard from '@/features/setting/component/auth-card'

import DetailHeader from '@/shared/component/detail-header'
import { Color } from '@/shared/constants/color'

export default function CreateScreen() {
	return (
		<>
			<View style={styles.container}>
				<DetailHeader path='/' />
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<View style={styles.wrapper}>
						<View style={{ gap: 24 }}>
							<Text style={styles.title}>Pengaturan</Text>
							<View style={styles.sectionWrapper}>
								<Text style={styles.sectionTitle}>Akun</Text>
								<AuthCard />
							</View>
							<View style={styles.sectionWrapper}>
								<Text style={styles.sectionTitle}>Preferensi</Text>
								<View style={styles.linkWrapper}>
									<View
										style={{
											...styles.linkItemWrapper,
											borderBottomWidth: 1,
											borderColor: Color.Border,
										}}
									>
										<View style={styles.linkItem}>
											<Globe size={24} color={Color.Neutral} opacity={0.5} />
											<Text>Bahasa</Text>
										</View>
										<Pressable>
											<ChevronRight
												size={24}
												color={Color.Neutral}
												opacity={0.5}
											/>
										</Pressable>
									</View>
									<View
										style={{
											...styles.linkItemWrapper,
											borderBottomWidth: 1,
											borderColor: Color.Border,
										}}
									>
										<View style={styles.linkItem}>
											<Moon size={24} color={Color.Neutral} opacity={0.5} />
											<Text>Mode Gelap</Text>
										</View>
										<Switch value={false} />
									</View>
									<View style={styles.linkItemWrapper}>
										<View style={styles.linkItem}>
											<DollarSign
												size={24}
												color={Color.Neutral}
												opacity={0.5}
											/>
											<Text>Mata Uang</Text>
										</View>
										<Pressable>
											<ChevronRight
												size={24}
												color={Color.Neutral}
												opacity={0.5}
											/>
										</Pressable>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<StatusBar backgroundColor='transparent' />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.Background,
		flex: 1,
	},

	wrapper: {
		padding: 16,
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: 1,
	},
	title: {
		fontSize: 20,
		color: Color.Neutral,
		fontWeight: 600,
	},
	sectionTitle: {
		fontSize: 16,
		color: Color.Neutral,
		opacity: 0.5,
	},
	sectionWrapper: {
		gap: 16,
	},
	linkWrapper: {
		backgroundColor: '#FFF',
		borderRadius: 8,
		boxShadow: '0 4px 12px rgba(59,58,77,0.10)',
	},
	linkItemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,
		paddingHorizontal: 16,
	},
	linkItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 16,
	},
})
