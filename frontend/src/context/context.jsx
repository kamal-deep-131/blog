import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const myContext = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/v1/user/login', { email, password });
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);

            <Navigate to="/profile" replace={true} />
        } catch (error) {
            console.error('Error in login:', error);
        }
    };

    const register = async (username, email, password) => {
        try {
            const response = await axios.post('/api/v1/user/register', { username, email, password });
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);

            // navigateToProfile()
        } catch (error) {
            console.error('Error in register:', error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        // navigateToLogin();
    };

    return (
        <myContext.Provider value={{ user, login, register, logout }}>
            {children}
        </myContext.Provider>
    );
};

export const contextStore = () => useContext(myContext);
