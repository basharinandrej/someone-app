

export interface User {
    id: number
    name: string
    surname: string
    avatar: string | null
}

export interface UserState {
    profile: User
    isLoading: boolean
    error: string | null 
}