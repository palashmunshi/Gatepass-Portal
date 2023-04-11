import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({  role, ...rest }) => {
    const userRole = JSON.parse(localStorage.getItem('role'));
    console.log("From Protected side", userRole);

    if (userRole === Number(role)) {
      return <Outlet/>
    }
    else{
      <Navigate to="/"/>
    }
    

    }