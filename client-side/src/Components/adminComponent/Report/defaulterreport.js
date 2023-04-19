import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import ReportWidget from "./ReportWidget/ReportWidget";

export const DefaulterReport = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Restricted Students Reports</div>
          <div className="widgets">
            <ReportWidget type="defaulter" />
            <ReportWidget type="bs" />
            <ReportWidget type="bgr" />
          </div>
        </div>
      </div>
    </div>
  );
};
