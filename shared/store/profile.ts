import { atom, selector } from 'recoil'
import { Profile } from '../types'

export const profileAtom = atom<Profile>({
	key: 'profile',
	default: {
		id: null,
		email: '',
		i18n: '',
		theme: '',
		currency: '',
	},
})

export const profileState = selector({
	key: 'profile-state',
	get: ({ get }) => {
		return get(profileAtom)
	},
})
