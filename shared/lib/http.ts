import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageKeys } from '../constants/storage-key'

interface ApiErrorResponse {
	message: string
	[key: string]: unknown
}

export class ApiError extends Error {
	constructor(
		public message: string,
		public statusCode: number,
		public data: ApiErrorResponse
	) {
		super(message)
		this.name = 'ApiError'
	}
}

interface RequestOptions {
	headers?: Record<string, string>
	params?: Record<string, string>
	auth?: boolean
	isMultipart?: boolean
}

export class HttpClient {
	private baseUrl: string
	private defaultHeaders: Record<string, string>

	constructor(baseUrl: string, defaultHeaders: Record<string, string> = {}) {
		this.baseUrl = baseUrl
		this.defaultHeaders = {
			'Content-Type': 'application/json',
			...defaultHeaders,
		}
	}

	private async request<T>(
		method: string,
		url: string,
		data?: unknown,
		options: RequestOptions = {}
	): Promise<T> {
		try {
			const queryParams = options.params
				? '?' + new URLSearchParams(options.params).toString()
				: ''

			let headers: Record<string, string> = {
				...this.defaultHeaders,
				...options.headers,
			}

			if (options.auth) {
				const token = await AsyncStorage.getItem(StorageKeys.Token)
				if (token) {
					headers['Authorization'] = `Bearer ${token}`
				}
			}

			let body: BodyInit | undefined

			if (options.isMultipart && data instanceof FormData) {
				delete headers['Content-Type'] // Let the browser set the Content-Type with boundary
				body = data
			} else {
				body = data ? JSON.stringify(data) : undefined
			}

			console.log('__URL__', this.baseUrl + url)

			const response = await fetch(this.baseUrl + url + queryParams, {
				method,
				headers,
				body,
			})

			const responseData = await response.json()
			console.log('___RESPONSE STATUS__', response.status)
			console.log('___RESULT__', responseData)

			if (!response.ok) {
				console.error(
					`Request Failed: ${method} ${this.baseUrl + url} | Status: ${
						response.status
					}`,
					responseData
				)

				const errorResponse: ApiErrorResponse = {
					message: responseData?.message || 'An error occurred',
					...responseData,
				}

				if (response.status === 401) {
					await AsyncStorage.removeItem(StorageKeys.Token)
				}

				throw new ApiError(
					errorResponse.message,
					response.status,
					errorResponse
				)
			}

			return responseData
		} catch (error) {
			console.error('Unexpected error occurred:', error)

			if (error instanceof ApiError) {
				throw error
			}

			const errorResponse: ApiErrorResponse = {
				message:
					error instanceof Error ? error.message : 'Unknown error occurred',
			}

			throw new ApiError(errorResponse.message, 500, errorResponse)
		}
	}

	async get<T>(url: string, options?: RequestOptions): Promise<T> {
		return this.request<T>('GET', url, undefined, options)
	}

	async post<T>(
		url: string,
		data: unknown,
		options?: RequestOptions
	): Promise<T> {
		return this.request<T>('POST', url, data, options)
	}

	async put<T>(
		url: string,
		data: unknown,
		options?: RequestOptions
	): Promise<T> {
		return this.request<T>('PUT', url, data, options)
	}

	async patch<T>(
		url: string,
		data: unknown,
		options?: RequestOptions
	): Promise<T> {
		return this.request<T>('PATCH', url, data, options)
	}

	async delete<T>(url: string, options?: RequestOptions): Promise<T> {
		return this.request<T>('DELETE', url, undefined, options)
	}
}
