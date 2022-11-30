import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Admin } from "./Components/adminComponent/admin";
import { Report } from "./Components/adminComponent/Report/report";
import { User } from "./Components/adminComponent/Settings/User/User";
import Login from './Screens/Login/login';
import {GatepassReport} from "./Components/adminComponent/Report/gatepassreport"
import {DefaulterReport} from "./Components/adminComponent/Report/defaulterreport"
import { WardenReport } from "./Components/adminComponent/Report/wardenreport";
import { BCHReport } from "./Components/adminComponent/Report/bchreport";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login />} /> 
            <Route exact path="/admin" element={<Admin />} />
            
            <Route exact path="/users" element={<User />} />
            <Route exact path="/changerole" element={<User />} />
            <Route exact path="/group" element={<User />} />
            <Route exact path="/parameter" element={<User />} />

            <Route exact path="/sreport" element={<Report />} />
            <Route exact path="/gtreport" element={<GatepassReport />} />
            <Route exact path="/dreport" element={<DefaulterReport />} />
            <Route exact path="/wreport" element={<WardenReport />} />
            <Route exact path="/bchreport" element={<BCHReport />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
