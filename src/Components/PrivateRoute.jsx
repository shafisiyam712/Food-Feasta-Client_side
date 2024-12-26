import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;
