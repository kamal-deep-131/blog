import React from 'react';
import { Navigate } from 'react-router-dom';
import { contextStore } from '../context/context.jsx';

const ProtectedRoutes = ({ children }) => {
    const { user } = contextStore();

    return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
