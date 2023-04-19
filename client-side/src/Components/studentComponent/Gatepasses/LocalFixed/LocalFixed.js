import React, { useEffect, useState } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import SidebarStudent from "../../../../Shared/Sidebar/studentSidebar";
import LFform from "./Form/LFform";

export const LocalFixed = () => {
  const [weekLimit, setWeekLimit] = useState(0);
  const [departureTime, setDepartureTime] = useState("00:00:00");
  const [arrivalTime, setarrivalTime] = useState("00:00:00");
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config")
      .then((response) => response.json())
      .then((text) => {
        setWeekLimit(text[0]["value"]);
        setDepartureTime(text[1]["value"]);
        setarrivalTime(text[2]["value"]);
      });
    const localInfo = localStorage.getItem("user");
    const obj = JSON.parse(localInfo);

    fetch(
      `http://127.0.0.1:4000/gatepass/v2/auth/user_information/${obj.email}`
    )
      .then((response) => response.json())
      .then((data) => setUserDetails(data));
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
            userDetails={userDetails}
          />
        </div>
      </div>
    </div>
  );
};
