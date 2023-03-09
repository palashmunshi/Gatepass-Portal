import { Route, Router, Routes} from "react-router-dom";
import { Guard } from "../../Components/guardComponent/guard";

const GuardRoutes = () => {
    return (
        <Router>
          <Routes>
          <Route exact path="/guard" element={<Guard />} />
            </Routes>
          
        </Router>
    );
  };
  
export default GuardRoutes;