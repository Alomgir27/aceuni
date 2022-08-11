import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../../contexts/auth';
import Login from '../../login';
export default function PrivateRoute({children }) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    // const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect route, you can point this to /login
            router.push('/login');
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Login />;
    }

    return children;
}