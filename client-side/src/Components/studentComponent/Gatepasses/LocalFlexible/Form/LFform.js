import React, { useEffect, useState, useReducer } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import Cookies from "js-cookie";

const LFform = (props) => {
  const [hour, setHour] = useState(new Date().getHours()); // present time
  const [minute, setMinute] = useState(new Date().getMinutes()); //present minute
  const [max_time, setMax_Time] = useState([]); //maximum time accepted from backend
  const accessToken = Cookies.get("ACCESS_TOKEN");

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config", {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((response) => response.json())
      .then((text) => {
        setMax_Time(text[2]["value"].split(":"));
      });
  }, []);

  return (
    <div>
      <DatePicker
        // selected={selectedDate}
        // onChange={handleDateChange}
        showTimeSelect
        showTimeSelectOnly
        timeFormat="HH:mm"
        timeIntervals={15}
        minTime={new Date().setHours(hour + 2, minute)} // set the minimum time accepted i.e current time +2 hours
        maxTime={new Date().setHours(
          parseInt(max_time[0]),
          parseInt(max_time[1])
        )} // set the maximum time accepted fetch from backend
      />
    </div>
  );
};

export default LFform;
