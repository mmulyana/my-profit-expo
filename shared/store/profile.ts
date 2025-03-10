import { atom } from 'recoil'

export const profileAtom = atom({
	key: 'profile',
	default: {
		id: null,
		email: '',
		i18n: '',
		theme: '',
		currency: '',
	},
})
