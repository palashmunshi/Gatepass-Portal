import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import '../admin.scss'
import ReportWidget from "./ReportWidget/ReportWidget";

export const GatepassReport = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar /> 
        <div className="listContainer">
          <div className="listTitle">Gatepass Reports</div>
          <div className="widgets">
            <ReportWidget type="gatepass" />
          </div>
        </div>
      </div>
    </div>
  );
};
