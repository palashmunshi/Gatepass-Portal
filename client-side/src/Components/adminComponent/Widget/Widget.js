import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import CommuteSharpIcon from "@mui/icons-material/CommuteSharp";
import NotInterestedSharpIcon from "@mui/icons-material/NotInterestedSharp";
import { PlusOneRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const Widget = ({ type }) => {
  const [Oncampus, setOncampus] = useState(0);
  const [Outcampus, setOutcampus] = useState(0);
  const [PendingRequests, setPendingRequests] = useState(0);
  const [Defaulter, setDefaulter] = useState(0);

  useEffect(() => {
    fetch("http://172.19.23.69:4000/gatepass/v2/admin/pending_request")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setPendingRequests(text);
      });

    fetch("http://172.19.23.69:4000/gatepass/v2/admin/student_in_campus")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setOncampus(text);
      });

    fetch("http://172.19.23.69:4000/gatepass/v2/admin/student_out_campus")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setOutcampus(text);
      });

      fetch("http://172.19.23.69:4000/gatepass/v2/admin/blacklist_student")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setDefaulter(text);
      });
  });

  let data;

  switch (type) {
    case "user":
      data = {
        title: "PENDING REQUESTS",
        amount: `${PendingRequests}`,
        link: "All users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "oncampus":
      data = {
        title: "ONCAMPUS",
        amount: `${Oncampus}`,
        link: "Student in campus",
        icon: (
          <SchoolSharpIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "outstation":
      data = {
        title: "OUTSTATION",
        amount: `${Outcampus}`,
        link: "Student out of campus",
        icon: (
          <CommuteSharpIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "defaulter":
      data = {
        title: "Restricted",
        amount: `${Defaulter}`,
        link: "Blocked students",
        icon: (
          <NotInterestedSharpIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <PlusOneRounded />
          {5}
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
