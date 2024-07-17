import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const myContext = createContext()

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/v1/user/login', { email, password })
            const data = response.data
            console.log(data.token)
            setUser(data.user);

            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', JSON.stringify(data.token))

        } catch (error) {
            console.log("Error in login:", error)
        }
    }

    const register = async (username, email, password) => {
        try {
            const response = await axios.post('/api/v1/user/register', { username, email, password })
            const data = response.data
            setUser(data.user)
            localStorage.setItem('user', JSON.stringify(data.user));
        } catch (error) {
            console.log("Error in register: ", error)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user');
    }

    return (
        <myContext.Provider value={{ user, login, register, logout }}>
            {children}
        </myContext.Provider>
    )
}

export const contextStore = () => useContext(myContext)


