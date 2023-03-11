import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import CommuteSharpIcon from "@mui/icons-material/CommuteSharp";
import NotInterestedSharpIcon from "@mui/icons-material/NotInterestedSharp";
import { PlusOneRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";


const Widget = (props) => {
  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.title}</span>
        <span className="counter">0</span>
        {props.type === "user" ? (
          <span className="link">
            
          </span>
        ) : (
          <span className="link"></span>
        )}
      </div>
      <div className="right">{props.icon}</div>
    </div>
  );
};

export default Widget;
