import React, { useEffect, useState } from "react";
import StudentNavbar from "../../../Shared/NavbarTailWind/StudentNavbar";
import StudentSidebar from "../../../Shared/SideBarTailWind/StudentSidebar";
import Gatepasses from "./GatepassesTable/Gatepasses";


export const AllGatepasses = () => {
    return (
        <div>
          <div className="flex flex-col mt-20 mx-5">
            <div className="relative py-3">
            All Gatepasses
            <Gatepasses />
                
            </div>
          </div>
          
          <StudentNavbar />
          <StudentSidebar />
        </div>
      );

}
