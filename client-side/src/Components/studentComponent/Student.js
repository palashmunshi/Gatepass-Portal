import React from 'react'


import StudentDashboard from './StudentDashboard/LatestTable/table';

export const Student = () => {
    return (
        <div className="admin">
          <SidebarStudent />
          <div className="adminContainer">
            <Navbar /> 
            <div className="listContainer">
              <div className="listTitle">Latest Gatepasses</div>
              <StudentDashboard />          
            </div>
          </div>
          </div>
        </div>
      );
}
