import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin } from "./Components/adminComponent/admin";
import { Report } from "./Components/adminComponent/Report/report";
import { User } from "./Components/adminComponent/Settings/User/User";
import Login from "./Screens/Login/login";
import { GatepassReport } from "./Components/adminComponent/Report/gatepassreport";
import { Student } from "./Components/studentComponent/Student";
import { LocalFixed } from "./Components/studentComponent/Gatepasses/LocalFixed/LocalFixed";
import { DefaulterReport } from "./Components/adminComponent/Report/defaulterreport";
import { WardenReport } from "./Components/adminComponent/Report/wardenreport";
import { BCHReport } from "./Components/adminComponent/Report/bchreport";
import { ChangeRole } from "./Components/adminComponent/Settings/changerole";
import { Parameter } from "./Components/adminComponent/Settings/parameter";
import OpenReport from "./Components/adminComponent/Report/OpenTable/OpenReport";
import { Warden } from "./Components/wardenComponent/warden";
import Info from "./Components/studentComponent/Info/Info";
import { Guard } from "./Components/guardComponent/guard";
import { Checkin } from "./Components/guardComponent/Checkin/checkin";
import { Checkout } from "./Components/guardComponent/Checkout/checkout";
import { Group } from "./Components/adminComponent/Settings/group";
import { VisitorCheckin } from "./Components/guardComponent/VisitorCheckin/checkin";
import { VisitorCheckout } from "./Components/guardComponent/VisitorCheckout/checkout";
import { PrivateRoute } from "./PrivateRoutes";
import GatepassState from "./Context/GatepassState";
import StudentProfile from "./Components/studentComponent/MyProfile";
import { OtherWarden } from "./Components/wardenComponent/OtherDashboard";
import LocalFlexible from "./Components/studentComponent/Gatepasses/LocalFlexible/LocalFlexible";
import Outstation from "./Components/studentComponent/Gatepasses/Outstation/Outstation";
import ApproveCancel from "./Components/wardenComponent/ApprovedCancelled/ApproveCancel";

function App() {
  return (
    <div className="App">
      <GatepassState>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Login />} />

            <Route exact path="/sreport" element={<Report />} />
            <Route exact path="/openreport" element={<OpenReport />} />
            <Route exact path="/gtreport" element={<GatepassReport />} />
            <Route exact path="/dreport" element={<DefaulterReport />} />
            <Route exact path="/wreport" element={<WardenReport />} />
            <Route exact path="/bchreport" element={<BCHReport />} />

            {/* <Route exact path="/student" element={<Student />} /> */}

            <Route element={<PrivateRoute role="1" />}>
              <Route exact path="/student" element={<Student />} />
              <Route path="/student/info" element={<Info />} />
              <Route path="/student/profile" element={<StudentProfile />} />
              <Route path="/student/localfixed" element={<LocalFixed />} />
              <Route
                path="/student/localflexible"
                element={<LocalFlexible />}
              />
              <Route path="/student/outstation" element={<Outstation />} />
            </Route>

            <Route element={<PrivateRoute role="4" />}>
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/users" element={<User />} />
              <Route exact path="/changerole" element={<ChangeRole />} />
              <Route exact path="/group" element={<Group />} />
              <Route exact path="/parameter" element={<Parameter />} />
            </Route>

            <Route element={<PrivateRoute role="5" />}>
              <Route exact path="/guard" element={<Guard />} />
              <Route exact path="/guard/checkin" element={<Checkin />} />
              <Route exact path="/guard/checkout" element={<Checkout />} />
              <Route
                exact
                path="/guard/VisitorCheckout"
                element={<VisitorCheckout />}
              />
              <Route
                exact
                path="/guard/VisitorCheckin"
                element={<VisitorCheckin />}
              />
            </Route>

            <Route element={<PrivateRoute role="2" />}>
              <Route exact path="/warden" element={<Warden />} />
              <Route exact path="/warden/other" element={<OtherWarden />} />
              <Route
                exact
                path="/warden/appcancelled"
                element={<ApproveCancel />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </GatepassState>
    </div>
  );
}

export default App;
