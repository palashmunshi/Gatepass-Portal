import React, { useEffect, useState, useReducer } from "react";
import ReactDropdown from "react-dropdown";
import "./style.scss";

const LFform = (props) => {
  // const DepartureDate = `${FormalValues.departuretime}`
  // const DepartureTime = "17:30:00";
  // const ArrivalTime = "21:30:00";
  const current = new Date();
  const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  console.log(time);
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const lastMonday = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate() - ((current.getDay() + 6) % 7)
  );
  const nextMonday = new Date(
    current.getFullYear(),
    current.getMonth(),
    current.getDate() + (7 - ((current.getDay() + 6) % 7))
  );

  const warden = ["Kamla Rawat", "Dhirendra Rathore", "Narendra Bisht"];
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      user_id: "",
      from_date: date,
      from_time: "1970-01-01T00:00:00.000Z",
      to_date: date,
      to_time: "1970-01-01T00:00:00.000Z",
      // purpose: "",
      // destination: "",
      // destination_contact: "",
      // visit_to: "",
      // send_approval_to: "70100296A",

      // "from_date":"2022-11-30",
      // "from_time":"1970-01-01T00:00:00.000Z",
      // "to_date":"2022-12-01",
      // "to_time":"1970-01-01T00:00:00.000Z",
      // "purpose":"home visit",
      // "destination":"ynr",
      // "destination_contact":"8935241978",
      // "visit_to":"ynr",
      // "send_approval_to":"00000087"
    }
  );

  const [lastMondayDate, setLastMondayDate] = useState("0000-00-00");
  const [nextMondayDate, setNextMondayDate] = useState("0000-00-00");

  const [isDisabled, setIsDisabled] = useState(false);
  const handleInput = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setFormInput({ [name]: value });
  };

  const checkBlacklist = async () => {
    let data = { ...formInput };
    let res = {};
    const id = data["user_id"];
    const fetchData = await fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/blacklisted/" + `${id}`
    )
      .then((Response) => Response.json())
      .then((response) => {
        res = response;
        return response.blacklisted;
      })
      .catch((err) => console.log("error:", err));
    // if (res.length != 0) {
    //   if (res[0].blacklisted === true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    // console.log(res);
    return fetchData;
  };
  const checkGatepassAvailability = async () => {
    let data = { ...formInput };
    const id = data["user_id"];

    const fetchData = await fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/get_number_of_local_fixed_student/" +
        `${id}/` +
        `${formatDate(lastMonday)}/` +
        `${formatDate(nextMonday)}`
    )
      .then((Response) => Response.json())
      .then((response) => {
        return response;
        // if (response.length != 0) {
        //   if (response.gatepassesUsed < props.weekLimit) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
      })
      .catch((err) => console.log("error:", err));

    return fetchData;
  };

  const checkTime = () => {
    if (props.departureTime <= time && time <= props.arrivalTime) {
      return true;
    } else {
      return false;
    }
  };

  const checkLocalFixed = async () => {
    const res1 = await checkTime();
    const res2 = await checkGatepassAvailability();
    const res3 = await checkBlacklist();

    if (res1 == true && res2 < props.weekLimit && res3 == false) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const check = await checkLocalFixed();

    if (check == true) {
      alert("go ahead");
    } else {
      alert("nahhhh");
    }
    // console.log(check);
    // console.log(checkBlacklist());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      // "user_id": "00000087",
      ...formInput,
    };

    const id = data["user_id"];
    fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/local_flexible_gatepass/" +
        `${id}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((Response) => Response.json())
      .then((response) => console.log("success:", response.msg))
      .catch((err) => console.log("error:", err));
  };

  return (
    <div className="lfform">
      <form className="form">
        <div className="common">
          <label className="label">Enrollment ID</label>
          <input type="text" name="user_id" onChange={handleInput} />
        </div>
        <div className="common">
          <label className="label">Departure Date</label>
          <input
            type="text"
            name="from_date"
            placeholder={date}
            disabled={true}
            onChange={handleInput}
          />
        </div>
        <div className="common">
          <label className="label">Departure Time</label>

          <input
            // type="time"
            // name="from_time"
            disabled={true}
            placeholder={props.departureTime}
            // onChange={handleInput}
          />
        </div>
        <div className="common">
          <label className="label">Arrival Date</label>
          <input
            type="text"
            name="to_date"
            placeholder={date}
            disabled={true}
            onChange={handleInput}
          />
        </div>

        <div className="common">
          <label className="label">Arrival Time</label>
          <input
            // type="time"
            // name="to_time"
            disabled={true}
            placeholder={props.arrivalTime}
            // onChange={handleInput}
          />
        </div>

        {/* <div className="common">
          <label className="label">Purpose</label>
          <input
            type="text"
            name="purpose"
            placeholder="Type a valid reason"
            onChange={handleInput}
          />
        </div> */}

        {/* <div className="common">
          <label className="label">Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Enter your destination"
            disabled={false}
            onChange={handleInput}
          />
        </div> */}

        {/* <div className="common">
          <label className="label">Destination Contact</label>
          <input
            type="text"
            name="destination_contact"
            disabled={false}
            onChange={handleInput}
          />
        </div> */}

        {/* <div className="common" style={{ marginBottom: "60px" }}>
          <label className="label">Send Approval To</label>
          <div className="dropdown">
            <ReactDropdown options={warden} placeholder="Select a warden" />
          </div>
        </div> */}

        <div className="common">
          <button
            className="button"
            type="submit"
            onClick={handleClick}
            disabled={false}
          >
            Apply Gatepass
          </button>
        </div>
      </form>
    </div>
  );
};

export default LFform;
