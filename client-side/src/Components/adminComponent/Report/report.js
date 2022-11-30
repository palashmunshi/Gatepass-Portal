import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import '../admin.scss'
import ReportWidget from "./ReportWidget/ReportWidget";

export const Report = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar /> 
        <div className="listContainer">
          <div className="listTitle">Student Reports</div>
            <div className="widgets">
            <ReportWidget type="student" />
            <ReportWidget type="sw" />
            <ReportWidget type="stw" />
            </div>
        </div>
      </div>
    </div>
  );
};
