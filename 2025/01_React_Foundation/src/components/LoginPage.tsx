import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
    const authStatus = useAuthStore((state) => state.status);
    const user = useAuthStore((state) => state.user);
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);
    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, []);
    if (authStatus === 'checking') {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>LoginPage</div>
            {
                (authStatus === 'authenticated') ?
                    <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
                    : <div>No autenticado</div>
            }
            {
                (authStatus === 'authenticated')
                    ? (
                        <button onClick={logout}>Logout</button>
                    )
                    : (
                        <button onClick={() => login('test@example.com', 'password')}>Login</button>
                    )
            }
        </>
    )
}
