import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/context/AuthProvider/AuthProvider';


const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();

    if (loading) {
        return <h1 className='text-5xl'>Loading...</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Private;