import "./login.scss"
import Button from '@mui/material/Button';  
import Stack from '@mui/material/Stack';  
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Admin from "./../../ScreenComponents/Admin";

const Login = () => {
  return (
    <div className="login">
      <h1 className="title">Login</h1>
      <div classname="buttons">
        <Stack align="center" direction="row" spacing={4}>  
          <Button variant="contained">
            <Link to="/home">
            Admin
            </Link>
          </Button>
            
          <Button variant="contained">
          <Link to="/student">
          Student
            </Link></Button>
          <Button variant="contained">Warden</Button>
          <Button variant="contained">Guard</Button>
          <Button variant="contained">BCH</Button>
        </Stack>
      </div>
      
    </div>
  )
}

export default Login