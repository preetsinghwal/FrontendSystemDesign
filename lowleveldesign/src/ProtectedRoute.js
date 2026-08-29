import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const isAuthenticated = false;
    return (
        <div>
            {isAuthenticated ? <Outlet /> : <Navigate to='/login' />}
        </div>
    )
}

export default ProtectedRoute
