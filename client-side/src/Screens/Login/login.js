import "bootstrap/dist/css/bootstrap.min.css"
import "./../Login/login.css"
import { Routes, Route } from "react-router-dom"
import Auth from "./auth"
import { Admin } from "../../Components/adminComponent/admin"
import { Student } from '../../Components/studentComponent/Student'

function Login() {
    return (
      <Routes>
        <Route path="/" element={<Auth />} exact/>
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
        {/* <Route path="/warden" element={<Auth />} />
        <Route path="/guard" element={<Auth />} />
        <Route path="/bch" element={<Auth />} /> */}
      </Routes>
    );
}

export default Login