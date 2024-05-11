import { createJSONStorage, atomWithStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse, AuthState, LoginRequest } from './auth.interface';
import { atom } from 'jotai';
import { API } from '../api/auth.api';
import axios, { AxiosError, AxiosResponse } from 'axios';


const INITIAL_STATE = {
	access_token: null,
	isLoading: false,
	error: null,
};

const storage = createJSONStorage<AuthState>(() => AsyncStorage);
export const authAtom = atomWithStorage<AuthState>('auth', INITIAL_STATE, storage);


export const loginAtom = atom(
    (get) => get(authAtom),
    async (_get, set, {password, email}: LoginRequest) => {
        set(authAtom, {
            access_token: null,
            isLoading: true,
            error: null
        })
        try {
            const response: AxiosResponse<AuthResponse> = await axios.post(API.login, {
                email,
                password
            })
            set(authAtom, {
                access_token: response.data.access_token,
                isLoading: false,
                error: null
            })
        } catch (error) {
            if(error instanceof AxiosError) {
                set(authAtom, {
                    access_token: null,
                    isLoading: false,
                    error: error.response?.data.message
                })
            }
        }
    }
)
