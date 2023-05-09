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
  const [arrivalTime, setArrivalTime] = useState(`${props.arrivalTime}`);
  const [pageReloadTime, setPageRelaodTime] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [wardenDetails, setWardenDetails] = useState({});
  const [message, setMessage] = useState("");
  // const [parameterSettings, setParameterSettings] = useState([]);
  const test_ArrivalTime = props.arrivalTime;

  useEffect(() => {
    fetch("http://localhost:4000/gatepass/v2/student/get_warden_details", {
      headers: { Authorization: accessToken },
    })
      .then((Response) => Response.json())
      .then((response) => setWardenDetails(response));
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

  const formatDepartureTime = (time) => {
    const timeArr = time.split(":");
    let hour = timeArr[0];
    if (Number(hour) === 22) {
      hour = "00";
    } else if (Number(hour) === 23) {
      hour = "01";
    } else {
      hour = (Number(hour) + 2).toString();
    }
    return `${hour.padStart(2, "0")}:${timeArr[1]}:00`;
  };

  const checkTime = () => {
    let time = "";
    fetch("http://localhost:4000/gatepass/v2/student/get_dates", {
      headers: { Authorization: accessToken },
    })
      .then((Response) => Response.json())
      .then((response) => {
        time = response.currentTime;
      });
    if ("06:00:00" <= time && time <= props.arrivalTime) {
      return true;
    } else {
      return false;
    }
  };

  const checkBlacklist = async () => {
    let res = {};
    const fetchData = await fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/blacklisted/",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
      .then((Response) => Response.json())
      .then((response) => {
        res = response;
        return response.blacklisted;
      })
      .catch((err) => console.log("error:", err));
    return fetchData;
  };

  const checkApprovedOrCheckedout = async () => {
    const fetchData = await fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/get_gatepass_status_for_localflexible",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
      .then((Response) => Response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => console.log("error: ", err));
    // console.log(fetchData);
    return fetchData;
  };

  const checkLocalflexible = async () => {
    const res0 = await checkTime();
    const res1 = await checkBlacklist();
    const res2 = await checkApprovedOrCheckedout();

    if (res1 == true) {
      setMessage("Message: You have been blacklisted.");
      return false;
    } else if (res0 == false) {
      setMessage("Message: You cannot apply a gatepass in the outside hours");
    } else if (res2.rowsAffected[0] === 0) {
      return true;
    } else if (
      res2.recordset[0].count > 0 &&
      res2.recordset[0].status === "Approved"
    ) {
      setMessage("Message: Your local flexible gatepass has been approved.");
      return false;
    } else if (
      res2.recordset[0].count > 0 &&
      res2.recordset[0].status === "CHECKEDOUT"
    ) {
      setMessage("Message: You have been checked out.");
      return false;
    } else if (
      res2.recordset[0].count > 0 &&
      res2.recordset[0].status === "Pending"
    ) {
      setMessage(
        "Message: You have already applied for local flexible gatepass."
      );
      return false;
    } else {
      return true;
    }
  };

  const applyLocalFlexibleGatepass = async () => {
    let fetchData = fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/apply_local_flexible",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify({
          from_date: departureDate,
          from_time: departureTime,
          to_date: departureDate,
          to_time: arrivalTime,
          purpose: purpose,
          approval_to: wardenDetails.alloted_warden,
        }),
      }
    )
      .then((Response) => Response.json())
      .then((response) => response)
      .catch((error) => console.log("error: " + error));

    return fetchData;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const check = await checkLocalflexible();
    if (check == true) {
      await applyLocalFlexibleGatepass();
      setMessage(
        "Message: You have successfuly applied for Local Flexible Gatepass!"
      );
    }
    console.log(arrivalTime);
    console.log(departureTime);
    console.log(formatDepartureTime(pageReloadTime));
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
            className="block w-full border-gray-300 rounded-md shadow-sm resize-y"
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
            defaultValue={formatDepartureTime(pageReloadTime)}
            min={formatDepartureTime(pageReloadTime)}
            max={props.arrivalTime}
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
            min={formatDepartureTime(pageReloadTime)}
            max={props.arrivalTime}
            defaultValue={props.arrivalTime}
            onChange={(event) => {
              setArrivalTime(event.target.value);
            }}
            className="block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="drop-shadow-2xl rounded-lg">
          <label htmlFor="approval" className="block font-medium">
            <b>Send approval to person:</b>
          </label>
          <input
            disabled={true}
            value={
              wardenDetails.warden_name + " - " + wardenDetails.contact_number
            }
            className="block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="text-red-500 font-bold">{message}</div>
        <button className="bg-green-500 px-4 py-2 rounded-lg text-white">
          Send Approval
        </button>
      </form>
    </div>
  );
};

export default LFform;
