import React from "react";


import '../adminComponent/admin.scss'
import List from "./LatestGatepasses/table";
import WardenSidebar from "../../Shared/SideBarTailWind/WardenSidebar";
import StudentNavbar from "../../Shared/NavbarTailWind/StudentNavbar";
import OtherGatepass from "./OtherDashboardGatepasses/OtherGatepass";






export const OtherWarden = () => {
  return (
    <div>
    <StudentNavbar/>
      <div>
        <WardenSidebar/>
        <div className="mt-24 px-20">
          <div>Other Warden's Pending Gatepasses</div>
          <OtherGatepass />
              
        </div>
      </div>
    </div>
  );
};
