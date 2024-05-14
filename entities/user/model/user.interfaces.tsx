

export interface User {
    id: number | null
    name: string | null
    avatar: string | null
}

export interface UserState {
    profile: User
    isLoading: boolean
    error: string | null 
}

export interface ProfileResponse {
    profile: {
        email: string
        id: number
        name: string
        photo: string
    }
}