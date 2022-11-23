import React from 'react'
import Navbar from '../../Shared/Navbar/navbar';
import SidebarStudent from '../../Shared/Sidebar/studentSidebar';

export const Student = () => {
    return (
        <div className="admin">
          <SidebarStudent />
          <div className="adminContainer">
            <Navbar /> 
            <div className="listContainer">
              <div className="listTitle">Latest Gatepasses</div>
              {/* <LatestGatepasses />           */}
            </div>
          </div>
        </div>
      );
}
