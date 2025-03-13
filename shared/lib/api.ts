import { BASE_API_URL } from '../constants/url'
import { HttpClient } from './http'

export const api = new HttpClient(BASE_API_URL as string)
