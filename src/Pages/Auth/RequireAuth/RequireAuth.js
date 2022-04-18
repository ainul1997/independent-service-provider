import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (user) {
        return children;
    } else {
        <Navigate to="/login" state={{ from: location }} replace />
    }
};
export default RequireAuth;