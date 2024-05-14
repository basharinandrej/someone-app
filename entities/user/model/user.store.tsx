import { atom } from "jotai";
import { UserState, User, ProfileResponse } from "./user.interfaces";
import axios, { AxiosResponse } from "axios";
import { API } from "../api/user.api";
import { authAtom } from "../../auth/model/auth.store";

const INITIAL_STATE_PROFILE: User = {
    id: null,
    name: null,
    avatar: null
}

export const profileAtom = atom<UserState>({
    profile: INITIAL_STATE_PROFILE,
    isLoading: false,
    error: null
})

export const getProfileAtom = atom(
    (get) => get(profileAtom),
    async (get, set) => {
        set(profileAtom, {
            profile: INITIAL_STATE_PROFILE,
            isLoading: true,
            error: null
        })
        try {
            const {access_token} = await get(authAtom)
            const response: AxiosResponse<ProfileResponse> = await axios.get(API.profile, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })

            set(profileAtom, {
                profile: {
                    name: response.data.profile.name,
                    id: response.data.profile.id,
                    avatar: response.data.profile.photo
                },
                isLoading: false,
                error: null
            })

        } catch (error) {
            if(error instanceof Error) {
                set(profileAtom, {
                    profile: INITIAL_STATE_PROFILE,
                    isLoading: true,
                    error: error.message
                })
            }
        }
    } 
)