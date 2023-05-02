import React from 'react'
import StudentDashboard from './StudentDashboard/LatestTable/table';
// import StudentNavbar from '../../Shared/NavbarTailwind/StudentNavbar';
// import StudentSidebar from '../../Shared/SideBarTailWind/StudentSidebar';
import StudentSidebar from '../../Shared/SideBarTailWind/StudentSidebar';
import StudentNavbar from '../../Shared/NavbarTailWind/StudentNavbar';

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
