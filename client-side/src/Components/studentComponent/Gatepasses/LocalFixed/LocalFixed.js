import React, { useEffect, useState } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import SidebarStudent from "../../../../Shared/Sidebar/studentSidebar";
import LFform from "./Form/LFform";
import "./localfixed.scss";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const LocalFixed = () => {
  const [weekLimit, setWeekLimit] = useState(0);
  const [departureTime, setDepartureTime] = useState("00:00:00");
  const [arrivalTime, setarrivalTime] = useState("00:00:00");
  const [userDetails, setUserDetails] = useState([]);
  const accessToken = Cookies.get("ACCESS_TOKEN");
  const decoded = jwt_decode(accessToken);
  const userData = decoded.data;

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config", {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((response) => response.json())
      .then((text) => {
        setWeekLimit(text[0]["value"]);
        setDepartureTime(text[1]["value"]);
        setarrivalTime(text[2]["value"]);
      });
    // const localInfo = localStorage.getItem("user");
    // const obj = JSON.parse(localInfo);
  }, []);

  return (
    <div className="admin">
      <SidebarStudent />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Local Fixed Gatepass</div>

          <LFform
            departureTime={departureTime}
            arrivalTime={arrivalTime}
            weekLimit={weekLimit}
          />
        </div>
      </div>
    </div>
  );
};
