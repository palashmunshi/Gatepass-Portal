import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import '../admin.scss'
import ReportWidget from "./ReportWidget/ReportWidget";

export const WardenReport = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar /> 
        <div className="heading">Warden Reports</div>
        <div className="widgets">
          <ReportWidget type="warden" />
        </div>
      </div>
    </div>
  );
};
