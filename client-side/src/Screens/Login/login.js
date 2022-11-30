import "bootstrap/dist/css/bootstrap.min.css"
import "./../Login/login.css"
import { Routes, Route } from "react-router-dom"
import Auth from "./auth"

import React from "react"

function Login() {
    return (
      <Routes>
        <Route path="/" element={<Auth />} exact/>
        {/* <Route exact path="/admin" element={<Admin />} /> */}
        
        
        {/* <Route path="/warden" element={<Auth />} />
        <Route path="/guard" element={<Auth />} />
        <Route path="/bch" element={<Auth />} /> */}
      </Routes>
      
    );
}

export default Login