// ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './authContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                currentUser ? <Component {...props} /> : <Redirect to="/auth" />
            }
        />
    );
};

export default ProtectedRoute;
