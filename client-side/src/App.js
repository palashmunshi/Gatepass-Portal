import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Admin } from "./Components/adminComponent/admin";
import { User } from "./Components/adminComponent/Settings/User/User";
import Login from './Screens/Login/login';

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

            <Route exact path="/sreport" element={<User />} />
            <Route exact path="/gtreport" element={<User />} />
            <Route exact path="/rreport" element={<User />} />
            <Route exact path="/wreport" element={<User />} />
            <Route exact path="/bchreport" element={<User />} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
