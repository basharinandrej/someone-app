import { atom } from "jotai";
import { UserState } from "./user.interfaces";



export const profileAtom = atom<UserState>({
    profile: {
        id: 1,
        name: 'Andrej',
        surname: 'Basharin',
        avatar: ''
    },
    isLoading: false,
    error: null
})