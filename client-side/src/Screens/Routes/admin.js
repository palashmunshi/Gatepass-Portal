import { Route, Router, Routes} from "react-router-dom";
import { Admin } from "../../Components/adminComponent/admin";
import { User } from "../../Components/adminComponent/Settings/User/User";

const AdminRoutes = () => {
    return (
        <Router>
          <Routes>
          <Route exact path="/admin" element={<Admin />} />
            <Route path="/users" component={User} exact />
            </Routes>
          
        </Router>
    );
  };
  
export default AdminRoutes;