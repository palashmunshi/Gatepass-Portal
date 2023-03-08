import AdminRoutes from "./Routes/admin";

import React from 'react'
import { Route, Routes, Switch } from "react-router-dom";

const Screen = () => {
  return (
    <div>
        <Routes>
        
        <AdminRoutes />
        
        </Routes>
    </div>
  )
}

export default Screen