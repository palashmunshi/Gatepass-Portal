import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";
import Cookies from "js-cookie";

const LFform = (props) => {
  const accessToken = Cookies.get("ACCESS_TOKEN");

  const [purpose, setPurpose] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [pageReloadTime, setPageRelaodTime] = useState("");
  const [sendTo, setSendTo] = useState("");
  // const [parameterSettings, setParameterSettings] = useState([]);
  const test_ArrivalTime = props.arrivalTime;

  useEffect(() => {
    fetch("http://localhost:4000/gatepass/v2/student/get_dates", {
      headers: { Authorization: accessToken },
    })
      .then((Response) => Response.json())
      .then((response) => {
        setDepartureDate(response.currentDate);
        setArrivalDate(response.currentDate);
        setPageRelaodTime(response.currentTime);
      });
  }, []);

  const formatTime = (time) => {
    const timeArr = time.split(":");
    return `${timeArr[0]}:${timeArr[1]}:00`;
  };

  const handleArrivalDateChange = (event) => {
    setArrivalDate(event.target.value);
  };

  const handleArrivalTimeChange = (event) => {
    setArrivalTime(event.target.value);
  };

  const handleSendToChange = (event) => {
    setSendTo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
    console.log(purpose);
    console.log(departureDate);
    console.log(departureTime);
    console.log(props.arrivalTime);
    console.log(formatTime(pageReloadTime));
  };

  return (
    <div className="p-4 w-1/2 bg-white drop-shadow-2xl rounded-lg mx-20 my-10 mt-24 ">
      Apply LocalFlexible Gatepass
      <form onSubmit={handleSubmit} className="space-y-4  px-10 py-10">
        <div>
          <label htmlFor="purpose" className="block font-medium">
            <b>Purpose of Visit</b>
          </label>
          <textarea
            id="purpose"
            name="purpose"
            value={purpose}
            required={true}
            rows="3"
            cols="20"
            onChange={(event) => {
              setPurpose(event.target.value);
            }}
            className="block w-full border-gray-300 rounded-md shadow-sm resize-none"
          />
        </div>
        <div>
          <label htmlFor="departureDate" className="block font-medium">
            <b> Departure Date </b>
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={departureDate}
            disabled={true}
            className="block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="departureTime" className="block font-medium">
            <b>Departure Time </b>
          </label>
          <input
            type="time"
            id="arrivalTime"
            name="arrivalTime"
            defaultValue={formatTime(pageReloadTime)}
            min={formatTime(pageReloadTime)}
            required={true}
            onChange={(event) => {
              setDepartureTime(event.target.value);
            }}
            className="block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="arrivalDate" className="block font-medium">
            <b>Arrival Date</b>
          </label>
          <input
            type="date"
            id="arrivalDate"
            name="arrivalDate"
            value={arrivalDate}
            disabled={true}
            className="block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="arrivalTime" className="block font-medium">
            <b>Arrival Time</b>
          </label>
          <input
            type="time"
            id="arrivalTime"
            name="arrivalTime"
            required={true}
            min={formatTime(pageReloadTime)}
            max={props.arrivalTime}
            defaultValue={props.arrivalTime}
            onChange={handleArrivalTimeChange}
            className="block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="drop-shadow-2xl rounded-lg">
          <label htmlFor="approval" className="block font-medium">
            <b>Send approval to person:</b>
          </label>
          <select
            id="approval"
            name="approval"
            className="block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <button className="bg-green-500 px-4 py-2 rounded-lg text-white">
          Send Approval
        </button>
      </form>
    </div>
  );
};

export default LFform;
