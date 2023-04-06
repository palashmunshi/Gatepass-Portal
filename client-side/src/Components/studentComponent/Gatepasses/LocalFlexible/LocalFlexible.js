import React, { useEffect, useState } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import SidebarStudent from "../../../../Shared/Sidebar/studentSidebar";
import LFform from "./Form/LFform";
import "./localflexible.scss";

export const LocalFlexible = () => {
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


  return (
    <div className="admin">
      <SidebarStudent />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Local Flexible Gatepass</div>
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
