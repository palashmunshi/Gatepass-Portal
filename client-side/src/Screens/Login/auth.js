import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

export default function Auth() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState({});
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    fetch(
      `http://127.0.0.1:4000/gatepass/v2/auth/user_information/${userObject.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRole(data.role_id);
        console.log(data.role_id);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "372946592599-u1gj83quodhpdae46ejslj4tto3mn3vn.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });     
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  useEffect(() => {
    if (user && role) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", JSON.stringify(role));
      console.log("User and role values set in localStorage:", user, role);
      

      if (role === 1) { 
        navigate("/student");   
      } else if (role === 4) {
        navigate("/admin");
      }
    }
  }, [user, role]);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div id="signInDiv"></div>
        </div>
      </form>
    </div>
  );
}
