import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./../formSource";
import "./../style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./../context/darkModeContext";
import Home from "./../MainComponents/Student/pages/home/Home";
import List from "./../MainComponents/Student/pages/list/List";
import New from "./../MainComponents/Student/pages/new/New";
import Single from "./../MainComponents/Student/pages/single/Single";
import Info from "../MainComponents/Student/pages/info/Info";
import Flexible from "../MainComponents/Student/pages/flexible/Flexible";

function Admin() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/student" element={<Home />} />
            <Route path="/student/users">
              <Route index element={<List />} />
              
            </Route>
            <Route path="/myprofile" element={<Single />} />
            <Route path="/student/info" element={<Info />} /> 
            <Route path="/student/flexible" element={<Flexible />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Admin;