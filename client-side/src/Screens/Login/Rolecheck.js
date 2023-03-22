import { useLocation } from "react-router-dom";
import Auth from "./auth";

export default function Rolecheck( props) {
//   const location = useLocation();
//   const email = new URLSearchParams(location.search).get("email");
    const {state}=useLocation();
    const {email}=state;
    console.log(email)    
  return (
    <div>
      <h1>Role Check</h1>   
      {/* {props.location.search} */}
      
      {/* {email && <p>Email: {email}</p>} */}
    </div>
  );
}
