import React from 'react'
import { contextStore } from '../context/context.jsx'

const ProtectedRoutes = ({ children }) => {
    const user = contextStore()
    if (!user) {
        return <Navigate to="/sign-in" />;
    }

    return children;
}

export default ProtectedRoutes