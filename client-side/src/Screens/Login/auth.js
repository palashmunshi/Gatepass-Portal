import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export default function Auth() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState({});
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    fetch(
      `http://127.0.0.1:4000/gatepass/v2/auth/user_information/${userObject.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRole(data.role_id);
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:4000/gatepass/v2/auth/google_JWT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        googleJWT: response.credential,
      }),
    })
      .then((Response) => Response.json())
      .then((response) => Cookies.set("ACCESS_TOKEN", response.ACCESS_TOKEN));
  }
  // const accessToken = Cookies.get('ACCESS_TOKEN');   this code is to access the cookie
  // Cookies.remove('ACCESS_TOKEN');   this is to remove the token from the cookie
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
      if (role === 1) {
        navigate("/student");
      } else if (role === 4) {
        navigate("/admin");
      } else if (role === 7) {
        navigate("/bch");
      } else if (role === 5) {
        navigate("/guard");
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
