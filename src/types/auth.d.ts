export interface User {
    id: string
    name: string
    email: string
}


export interface AuthState {
    data: User | null
    token: string | null
    isAuthenticated: boolean

}

