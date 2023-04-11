import React from 'react';
import { Navigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, role, ...rest }) => {
    const userRole = JSON.parse(localStorage.getItem('role'));
    console.log("From Protected side", userRole);

    if (userRole === Number(role)) {
        return <Route {...rest} element={<Component />} />;
      } else if (userRole === 1) {
        return <Navigate to="/student" replace={true} />;
      } else {
        return <Navigate to="/" replace={true} />;
      }
    };