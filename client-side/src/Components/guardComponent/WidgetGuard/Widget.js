import "./widget.scss";
import React, { useEffect, useState } from "react";



const Widget = (props) => {
  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.title}</span>
        <span className="counter">{props.counter}</span>
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
