import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import GuardSidebar from "../../../Shared/Sidebar/guardSidebar";
import "./checkin.scss";
import { CheckinDetails } from "./checkinDetails/checkinDetails";
import StudentSidebar from "../../../Shared/SideBarTailWind/StudentSidebar";

export const Checkin = () => {
  return (
    <div className="guard">
      <GuardSidebar />
      <div className="guardContainer">
        <Navbar />
        <CheckinDetails />
      </div>
    </div>
  );
};
