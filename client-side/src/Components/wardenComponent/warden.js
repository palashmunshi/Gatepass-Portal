import React from "react";


import '../adminComponent/admin.scss'
import List from "./LatestGatepasses/table";

//import WardenSidebar from "../../Shared/SideBarTailWind/WardenSidebar";
//import StudentNavbar from "../../Shared/NavbarTailwind/StudentNavbar";
import StudentNavbar from "../../Shared/NavbarTailWind/StudentNavbar";
import WardenSidebar from "../../Shared/SideBarTailWind/WardenSidebar"
import MyGatepassDashboard from "./MyDashboardGatepasses/MyGatepassDashboard";


export const Warden = () => {
  return (
    <div>
    <StudentNavbar/>
    <WardenSidebar/>
      <div>
       
        <div className="mt-24 px-20">
          <div>Pending Gatepasses</div>
          <MyGatepassDashboard/>
              
        </div>
      </div>
    </div>
  );
};
