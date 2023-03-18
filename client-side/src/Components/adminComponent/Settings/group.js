import { Button } from "@mui/material";
import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import "./group.scss";

export const Group=()=> {
  return (
    <div className="admin">
    <Sidebar />
    <div className="adminContainer">
      <Navbar />
      <div className = "MultyGroupDesign">
     <div className = "GroupDesign">
        <div className="Align">
             <div id="heading"><h5>Add/Update Groups</h5></div>
        </div>
        <div className ="search3">
            <input type='text' placeholder="make a new group" id = "search1"></input>
            <button id = "add">+</button>
        </div>
      </div>
      <div className = "GroupDesign">
        <div className="Align">
             <div id="heading"><h5>Add/Update SubGroups</h5></div>
        </div>
        <div className ="search3">
            <input type='text' placeholder="make a new subgroup" id = "search1"></input>
            <button id = "add">+</button>
        </div>
      </div>
     
       
        
        
      </div>
      </div>
      </div>
  );
}

export default Group;