import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import Widget from "../Widget/Widget";
import '../admin.scss'
import ReportWidget from "./ReportWidget/ReportWidget";

export const BCHReport = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">BCH Reports</div>
          <div className="widgets">
            <Widget type="oncampus" />
            <Widget type="outstation" />
          </div>
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
