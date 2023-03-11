import React from "react";
import Navbar from "../../Shared/Navbar/navbar";
import GuardSidebar from "../../Shared/Sidebar/guardSidebar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Widget from "./WidgetGuard/Widget";
import './guard.scss'
export const Guard = () => {
  return (
    <div className="admin">
      
      <GuardSidebar />
      <div className="adminContainer">
        
        <Navbar />
        <div className="widgets">
          <Widget type="user" title="On Campus" icon={<PersonOutlinedIcon/>} />;
          <Widget type="oncampus" title="Approved today" icon={<PersonOutlinedIcon />} />;
          <Widget type="outstation" title="Returning Today" icon={<PersonOutlinedIcon/>} />;
          <Widget type="defaulter" title="Blocked" icon={<PersonOutlinedIcon/>} />;
        </div>
      </div>
   
    </div>
    
  );
};
