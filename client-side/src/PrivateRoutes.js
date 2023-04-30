import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import GatePassContext from './Context/GatepassContext';

export const PrivateRoute = ({  role, ...rest }) => {
    const {state} = useContext(GatePassContext);
    const userRole = state.role;
    console.log("From Protected side", userRole);

    if (userRole === Number(role)) {
      return <Outlet/>
    }
    else{
      <Navigate to="/"/>
    }
    

    }