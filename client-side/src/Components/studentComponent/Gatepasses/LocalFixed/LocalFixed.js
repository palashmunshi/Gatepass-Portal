import React, { useEffect, useState } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import SidebarStudent from "../../../../Shared/Sidebar/studentSidebar";
import LFform from "./Form/LFform";
import "./localfixed.scss";

export const LocalFixed = () => {
  // const [weekLimit, setWeekLimit] = useState(0);
  // const [gatepassUsed, setGatepassUsed] = useState(0);
  // useEffect(() => {
  //   fetch(
  //     "http://127.0.0.1:4000/gatepass/v2/student/get_number_of_local_fixed_config"
  //   )
  //     .then((response) => console.log(response.json()))
  //     .then((text) => console.log(text));
  // });

  const [parameter, setParameter] = useState([]);
  const [weekLimit, setWeekLimit] = useState(0);
  const [departureTime, setDepartureTime] = useState("00:00:00");
  const [arrivalTime, setarrivalTime] = useState("00:00:00");

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config")
      .then((response) => response.json())
      .then((text) => {
        setWeekLimit(text[0]["value"]);
        setDepartureTime(text[1]["value"]);
        setarrivalTime(text[2]["value"]);
      });
  }, []);

  return (
    <div className="admin">
      <SidebarStudent />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Local Fixed Gatepass</div>
          <div className="link">
            You have {2} gatepasses left on autoapproval
          </div>
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
