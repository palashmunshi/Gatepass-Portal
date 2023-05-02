import React from "react";


import '../adminComponent/admin.scss'
import List from "./LatestGatepasses/table";

//import WardenSidebar from "../../Shared/SideBarTailWind/WardenSidebar";
//import StudentNavbar from "../../Shared/NavbarTailwind/StudentNavbar";
import StudentNavbar from "../../Shared/NavbarTailWind/StudentNavbar";
import WardenSidebar from "../../Shared/SideBarTailWind/WardenSidebar"


export const Warden = () => {
  return (
    <div className="admin">
    <StudentNavbar/>
    <WardenSidebar/>
      <div className="adminContainer">
       
        <div className="mt-24 px-20">
          <div className="listTitle">Latest Gatepasses</div>
          <List />
              
        </div>
      </div>
    </div>
  );
};
