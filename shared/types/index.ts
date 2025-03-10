export type Item = {
	id: string
	name: string
	sellingPrice: number
	purchasePrice: number
	quantity: number
	createdAt: string
	photo?: string | null
}

export type Profile = {
	id: string | null
	email: string
	i18n: string
	currency: string
	theme: string
}
