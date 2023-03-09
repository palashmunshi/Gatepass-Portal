import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Admin } from "./Components/adminComponent/admin";
import { Report } from "./Components/adminComponent/Report/report";
import { User } from "./Components/adminComponent/Settings/User/User";
import Login from './Screens/Login/login';
import {GatepassReport} from "./Components/adminComponent/Report/gatepassreport"
import { Student } from "./Components/studentComponent/Student"
import { LocalFixed } from "./Components/studentComponent/Gatepasses/LocalFixed/LocalFixed";
import {DefaulterReport} from "./Components/adminComponent/Report/defaulterreport"
import { WardenReport } from "./Components/adminComponent/Report/wardenreport";
import { BCHReport } from "./Components/adminComponent/Report/bchreport";
import { ChangeRole } from "./Components/adminComponent/Settings/changerole";
import { Parameter } from "./Components/adminComponent/Settings/parameter";
import OpenReport from "./Components/adminComponent/Report/OpenTable/OpenReport";
import { Warden } from "./Components/wardenComponent/warden";
import Info from "./Components/studentComponent/Info/Info";
import {Guard} from "./Components/guardComponent/guard"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login />} /> 
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/guard" element={<Guard />} />
            
            <Route exact path="/users" element={<User />} />
            <Route exact path="/changerole" element={<ChangeRole />} />
            <Route exact path="/group" element={<User />} />
            <Route exact path="/parameter" element={<Parameter />} />

            <Route exact path="/sreport" element={<Report />} />
            <Route exact path="/openreport" element={<OpenReport />} />
            <Route exact path="/gtreport" element={<GatepassReport />} />
            <Route exact path="/dreport" element={<DefaulterReport />} />
            <Route exact path="/wreport" element={<WardenReport />} />
            <Route exact path="/bchreport" element={<BCHReport />} />

            <Route path="/student" element={<Student />} />
            <Route path="/localfixed" element={<LocalFixed />} />
            <Route path="/student/info" element={<Info />} />

            <Route path="/warden" element={<Warden />} />


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
