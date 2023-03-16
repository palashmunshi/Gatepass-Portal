import React, { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar/navbar";
import GuardSidebar from "../../Shared/Sidebar/guardSidebar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import NotInterestedSharpIcon from "@mui/icons-material/NotInterestedSharp";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import Widget from "./WidgetGuard/Widget";
import "./guard.scss";
export const Guard = () => {
  const [ApprovedToday, setApprovedToday] = useState(0);
  const [ReturningToday, setReturningToday] = useState(0);
  const [StudentsIn, setStudentsIn] = useState(0);
  const [BlackListStudent, setBlacklistStudent] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await fetch("http://127.0.0.1:4000/gatepass/v2/guard/approved_today")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setApprovedToday(data);
        });
      await fetch("http://127.0.0.1:4000/gatepass/v2/guard/returning_today")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setReturningToday(data);
        });
      await fetch("http://127.0.0.1:4000/gatepass/v2/guard/students_in_campus")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setStudentsIn(data);
        });
      await fetch("http://127.0.0.1:4000/gatepass/v2/guard/blacklist_students")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBlacklistStudent(data);
        });
    }
    fetchData();
    const id = setInterval(() => {
      fetchData();
    }, 300000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="admin">
      <GuardSidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="widgets">
          <Widget
            type="user"
            title="On Campus"
            icon={
              <SchoolSharpIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            }
            counter={StudentsIn}
          />

          <Widget
            type="oncampus"
            title="Students Leaving Today"
            icon={
              <DoneOutlineIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(11, 156, 49, 0.4)",
                  color: "green",
                }}
              />
            }
            counter={ApprovedToday}
          />

          <Widget
            type="outstation"
            title="Returning Today"
            icon={
              <DirectionsCarFilledRoundedIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(0, 0, 255, 0.2)",
                  color: "blue-gray",
                }}
              />
            }
            counter={ReturningToday}
          />

          <Widget
            type="defaulter"
            title="Blocked"
            icon={
              <NotInterestedSharpIcon
                className="icon"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            }
            counter={BlackListStudent}
          />
        </div>
      </div>
    </div>
  );
};
