import { create } from "zustand";

interface User {
    name: string;
    email: string;
}
interface AuthState {
    status: 'checking' | 'authenticated' | 'unauthenticated';
    token?: string;
    user?: User;
    errorMessage?: string;
    login:(email: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,
    errorMessage: undefined,
    login: (email:string, password:string) => {
        set({
            status: 'authenticated',
            token: 'fake-token',
            user: {
                name: 'John Doe',
                email: email,
            },
            errorMessage: undefined,
        });
    },
    logout: () => {
        set({
            status: 'unauthenticated',
            token: undefined,
            user: undefined,
            errorMessage: undefined,
        });
    },
}));
