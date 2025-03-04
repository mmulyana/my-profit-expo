import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { ImagePlus } from 'lucide-react-native'
import { Controller } from 'react-hook-form'

import { Color } from '../constants/color'

export default function ImageUploader({ control }: any) {
	return (
		<Controller
			control={control}
			name='image'
			render={({ field: { onChange, value } }) => {
				const pickImage = async () => {
					let result = await ImagePicker.launchImageLibraryAsync({
						mediaTypes: ImagePicker.MediaTypeOptions.Images,
						allowsEditing: true,
						quality: 1,
					})
					if (!result.canceled) {
						onChange(result.assets[0].uri)
					}
				}

				return (
					<View style={styles.imageContainer}>
						<View style={{ flexDirection: 'row', gap: 4 }}>
							<Text>Foto</Text>
							<Text style={{ opacity: 0.5 }}>(opsional)</Text>
						</View>
						{value ? (
							<View style={styles.imagePreviewContainer}>
								<Image source={{ uri: value }} style={styles.imagePreview} />
								<Pressable onPress={() => onChange('')}>
									<Text
										style={{
											color: Color.Neutral,
											fontSize: 14,
											fontWeight: 500,
										}}
									>
										Hapus
									</Text>
								</Pressable>
							</View>
						) : (
							<Pressable style={styles.uploadButton} onPress={pickImage}>
								<ImagePlus color={Color.Neutral} />
								<Text style={styles.uploadText}>Upload</Text>
							</Pressable>
						)}
					</View>
				)
			}}
		/>
	)
}

const styles = StyleSheet.create({
	label: {
		color: Color.Neutral,
		fontSize: 16,
	},
	imageContainer: { gap: 8 },
	uploadButton: {
		backgroundColor: '#EFEFEF',
		borderRadius: 8,
		height: 88,
		width: 88,
		gap: 2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: Color.Border,
		borderWidth: 1,
		borderStyle: 'dashed',
	},
	uploadText: { color: Color.Neutral, fontSize: 14 },
	imagePreviewContainer: { flexDirection: 'row', alignItems: 'center' },
	imagePreview: { width: 88, height: 88, borderRadius: 8, marginRight: 10 },
})
