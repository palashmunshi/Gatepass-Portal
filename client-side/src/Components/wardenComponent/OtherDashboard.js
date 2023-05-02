import React from "react";


import '../adminComponent/admin.scss'
import List from "./LatestGatepasses/table";
import WardenSidebar from "../../Shared/SideBarTailWind/WardenSidebar";
import StudentNavbar from "../../Shared/NavbarTailwind/StudentNavbar";


export const OtherWarden = () => {
  return (
    <div className="admin">
    <StudentNavbar/>
      <div className="adminContainer">
        <WardenSidebar/>
        <div className="mt-24 px-20">
          <div className="listTitle">Other Gatepasses</div>
          <List />
              
        </div>
      </div>
    </div>
  );
};
