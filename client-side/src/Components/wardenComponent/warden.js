import React from "react";
import Navbar from "../../Shared/Navbar/navbar";
import Sidebar from "../../Shared/Sidebar/wardenSidebar";
import '../adminComponent/admin.scss'
import List from "./LatestGatepasses/table";


export const Warden = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar /> 
        <div className="listContainer">
          <div className="listTitle">Latest Gatepasses</div>
          <List />
              
        </div>
      </div>
    </div>
  );
};
