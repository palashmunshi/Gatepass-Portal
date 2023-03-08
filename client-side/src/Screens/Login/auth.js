import React, { useState } from "react";
import {BrowserRouter as Redirect } from "react-router-dom";
import { user } from "../../Data/logindata";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check Roles
  const checkRoles = () => {
    console.log("entered")
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }
    
    else if (email === user[0].username) {
      console.log(user[0].username);
      <Redirect to="/warden" />
    }

    else if (email === user[1].username) {
      console.log(user[1].username);
      <Redirect to="/student" />
    }

    else if (email === user[2].username) {
      console.log(user[2].username);
      <Redirect to="/admin" />
    }

    else if (email === user[3].username) {
      console.log(user[3].username);
      <Redirect to="/guard" />
    }

    else if (email === user[4].username) {
      console.log(user[4].username);
      <Redirect to="/bch" />
    }

  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={checkRoles}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}