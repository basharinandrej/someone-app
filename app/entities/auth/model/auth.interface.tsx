

export interface AuthResponse {
    access_token: string | null
}

export interface AuthState extends AuthResponse{
    isLoading: boolean
    error: string | null
}

export interface LoginRequest {
    password: string
    email: string
}