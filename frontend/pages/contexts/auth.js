import React, { createContext, useContext, useState, useEffect } from 'react';
import Router from 'next/router';
const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('userToken'));
        console.log('token: ', token);
        if (token?.data?.loginSuccess === true) {
            setUser(token?.data?.user);
            setIsAuthenticated(true);
            Router.push('/home')
        }
    }, []);

    // function loginWithToken() {
    //     localStorage.setItem('token', 'true');
    //     setIsAuthenticated(true);
    //     setUser({
    //         name: 'hello',
    //         msg: 'Logged in because token in localStorage',
    //     });
    // }
    function login(arg) {
        console.log(arg);
        if(arg?.data?.loginSuccess === true){
        localStorage.setItem('userToken', JSON.stringify(arg));
        setIsAuthenticated(true);
        setUser(arg?.data?.user);
        Router.push('/home');
       }
    }

    function logout() {
        setIsAuthenticated(false);
        setUser([]);
        localStorage.removeItem('userToken');
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };