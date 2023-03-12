import React from "react";
import Navbar from "../../Shared/Navbar/navbar";
import GuardSidebar from "../../Shared/Sidebar/guardSidebar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import NotInterestedSharpIcon from "@mui/icons-material/NotInterestedSharp";
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import Widget from "./WidgetGuard/Widget";
import './guard.scss'
export const Guard = () => {
  return (
    <div className="admin">
      
      <GuardSidebar />
      <div className="adminContainer">
        
        <Navbar />
        <div className="widgets">
          <Widget type="user" title="On Campus" icon={<SchoolSharpIcon 
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />} />

          <Widget type="oncampus" title="Approved today" icon={<DoneOutlineIcon
            className="icon"
            style={{
              backgroundColor: "rgba(11, 156, 49, 0.4)",
              color: "green",
            }}
            />} />

          <Widget type="outstation" title="Returning Today" icon={<DirectionsCarFilledRoundedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(0, 0, 255, 0.2)",
            color: "blue-gray",
          }}
          />} />

          <Widget type="defaulter" title="Blocked" icon={<NotInterestedSharpIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />} />
        </div>
      </div>
   
    </div>
    
  );
};
