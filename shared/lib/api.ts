import { HttpClient } from './http'

export const api = new HttpClient(process.env.EXPO_PUBLIC_API_URL as string)
