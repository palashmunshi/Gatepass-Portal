import React from 'react'


import StudentDashboard from './StudentDashboard/LatestTable/table';
import StudentSidebar from '../../Shared/SideBarTailWind/StudentSidebar';
import StudentNavbar from '../../Shared/NavbarTailwind/StudentNavbar';


export const Student = () => {
    return (
        <div className="admin">
        <StudentNavbar/>
          <StudentSidebar/>
          <div className="adminContainer">
           
            <div className="listContainer">
              <div className="listTitle">Latest Gatepasses</div>
              <StudentDashboard />          
            </div>
          </div>
        </div>
      );
}
