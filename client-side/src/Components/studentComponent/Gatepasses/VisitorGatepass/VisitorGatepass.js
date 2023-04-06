import React, { useEffect, useState } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import SidebarStudent from "../../../../Shared/Sidebar/studentSidebar";
import VisitorGPForm from "./Form/VisitorGPForm";
import "./VisitorGp.scss";

export const VisitorGatepass = () => {
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
    const fetchData = async () => {
      fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config")
        .then((response) => response.json())
        .then((text) => setParameter(text));
      console.log(parameter);
      if (parameter.length !== 0) {
        setWeekLimit(parameter[0]["value"]);
        setDepartureTime(parameter[1]["value"]);
        setarrivalTime(parameter[2]["value"]);
      }
    };
    const timer = setTimeout(() => fetchData(), 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="admin">
      <SidebarStudent />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Visitor Gatepass</div>
          <VisitorGPForm />
        </div>
      </div>
    </div>
  );
};
