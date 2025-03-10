import { atom, selector } from 'recoil'

export const guestAtom = atom({
	key: 'guestAtom',
	default: '',
})

export const guestIdState = selector({
	key: 'gestIdState',
	get: ({ get }) => {
		return get(guestAtom)
	},
})
