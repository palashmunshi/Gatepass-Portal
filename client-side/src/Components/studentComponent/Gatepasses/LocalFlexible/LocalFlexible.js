import React, { useState, useEffect } from "react";
import StudentNavbar from "../../../../Shared/NavbarTailWind/StudentNavbar";
import StudentSidebar from "../../../../Shared/SideBarTailWind/StudentSidebar";
import LFform from "./Form/LFform";
import Cookies from "js-cookie";

const LocalFlexible = () => {
  const accessToken = Cookies.get("ACCESS_TOKEN");
  const [arrivalTime, setarrivalTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config", {
        headers: {
          Authorization: accessToken,
        },
      })
        .then((response) => response.json())
        .then((text) => {
          setarrivalTime(text[2]["value"]);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      <LFform arrivalTime={arrivalTime} />
      <StudentNavbar />
      <StudentSidebar />
    </div>
  );
};

export default LocalFlexible;
