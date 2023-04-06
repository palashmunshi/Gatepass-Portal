import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Auth from "./auth";

export default function Rolecheck(props) {
  const { state } = useLocation();
  const { email } = state;
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/gatepass/v2/auth/user_information/${email}`)
      .then(response => response.json())
      .then(data => {
        setRole(data.role_id);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [email]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(role);

  if (role == 1) {
    navigate("/student", { state:{email:email }});
  }

  return (
    <div>
      <h1>Role Check</h1>   
      {role && <p>Role ID: {role}</p>}
    </div>
  );
}
