import React from "react";
import Navbar from "../../Shared/Navbar/navbar";
import Sidebar from "../../Shared/Sidebar/adminSidebar";
import Widget from "./Widget/Widget";
import LatestGatepasses from "./LatestGatepasses/table";

export const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="oncampus" />
          <Widget type="outstation" />
          <Widget type="defaulter" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Gatepasses</div>
          <LatestGatepasses />
        </div>
      </div>
    </div>
  );
};
