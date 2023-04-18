import React, { useEffect, useState, useReducer } from "react";
import ReactDropdown from "react-dropdown";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";


const LFform = (props) => {
  const[hour,settime]=useState(new Date().getHours());// present time
  const[minute,setminute]=useState(new Date().getMinutes());//present minute
  const[max_time,setmaxTime]=useState([]);//maximum time accepted from backend
  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config")
      .then((response) => response.json())
      .then((text) => {
        setmaxTime(text[2]["value"].split(':'));
      });
  }, []);  
  console.log(max_time)

  return (
    <div >
        <DatePicker
      // selected={selectedDate}
      // onChange={handleDateChange}
      showTimeSelect
        showTimeSelectOnly
      timeFormat="HH:mm"
      timeIntervals={15}
      minTime={new Date().setHours(hour+2, minute)} // set the minimum time accepted i.e current time +2 hours
      maxTime={new Date().setHours(parseInt(max_time[0]), parseInt(max_time[1]))} // set the maximum time accepted fetch from backend
    />
    {/* {max_time[0]} */}
    </div>
  );
};

export default LFform;
