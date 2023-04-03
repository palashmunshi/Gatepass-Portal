import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import Rolecheck from "./Rolecheck";

export default function Auth() {
  const [role_id, setRoleId] = useState(null);
  const [error, setError] = useState(null);
  const [email,setEmail]=useState("");
  const navigate = useNavigate(); // Add this line to get navigate object\
  const [userInfo, setUserInfo] = useState({ email: "", roleId: null });

  

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <LoginSocialGoogle
          client_id={"372946592599-u1gj83quodhpdae46ejslj4tto3mn3vn.apps.googleusercontent.com"}
          scope="openid profile email"
          discoveryDocs="claims_supported"  
          access_type="offline"
          onResolve={({ provider, data }) => {
            console.log(data);
            const send_email = data.email;
            setEmail(send_email);
            console.log(email);
            // navigate(`/Rolecheck ?email={send_email}`); // navigate to RoleCheck
            // <Rolecheck email={send_email}/>
            navigate('/Rolecheck' ,{ state:{email:send_email }});  
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
          </LoginSocialGoogle>
          {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
  
}
