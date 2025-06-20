import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const LogoutPage = () => {
    const { LogoutUser } = useAuth();

    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])

    return (
        <>
            <Navigate to='/loginpage' />
        </>
    )
}

export default LogoutPage
