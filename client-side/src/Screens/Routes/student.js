import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Student } from '../../Components/studentComponent/student';

function student() {
     // const { darkMode } = useContext(DarkModeContext);
    return (
//     //   <div className={darkMode ? "app dark" : "app"}>
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/student" element={<Student />} />
              {/* <Route path="/student/users">
                <Route index element={<List />} />
                
              </Route>
              <Route path="/myprofile" element={<Single />} />
              <Route path="/student/info" element={<Info />} /> 
              <Route path="/student/flexible" element={<Flexible />} />  */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default student;