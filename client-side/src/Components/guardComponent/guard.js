import React from "react";
import Navbar from "../../Shared/Navbar/navbar";
import GuardSidebar from "../../Shared/Sidebar/guardSidebar";
import Widget from "./WidgetGuard/Widget";
import './guard.scss'
export const Guard = () => {
  return (
    <div className="admin">
      
      <GuardSidebar />
      <div className="adminContainer">
        
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="oncampus" />
          <Widget type="outstation" />
          <Widget type="defaulter" />
        </div>
      </div>
   
    </div>
    
  );
};
