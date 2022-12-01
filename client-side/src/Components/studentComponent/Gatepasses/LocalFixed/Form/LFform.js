import React, { useEffect, useState, useReducer } from "react";
import ReactDropdown from "react-dropdown";
import "./style.scss";

const LFform = () => {
  // const DepartureDate = `${FormalValues.departuretime}`
  // const DepartureTime = "17:30:00";
  // const ArrivalTime = "21:30:00";
  const current = new Date();
  const time = `${current.getHours()}${current.getMinutes()}`;
  console.log(time);
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const warden = ["Kamla Rawat", "Dhirendra Rathore", "Narendra Bisht"];
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      "user_id": "",
      "from_date": date,
      "from_time": "1970-01-01T00:00:00.000Z",
      "to_date": date,
      "to_time": "1970-01-01T00:00:00.000Z",
      "purpose": "",
      "destination": "",
      "destination_contact": "",
      "visit_to": "",
      "send_approval_to": "70100296A",
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

  const handleInput = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    if (name === "destination") {
      setFormInput({ [name]: value, visit_to: value });
    } else {
      setFormInput({ [name]: value });
    }
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      // "user_id": "00000087",
      ...formInput,
    };

    const id = data['user_id'];
    fetch(
      "http://192.168.9.230:4000/gatepass/v2/student/local_flexible_gatepass/"+`${id}`,
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
      <form className="form" onSubmit={handleSubmit}>
      <div className="common">
          <label className="label">Enrollment ID</label>
          <input
            type="text"
            name="user_id"
            onChange={handleInput}
          />
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

          <input type="time" name="from_time" onChange={handleInput} />
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
          <input type="time" name="to_time" onChange={handleInput} />
        </div>

        <div className="common">
          <label className="label">Purpose</label>
          <input
            type="text"
            name="purpose"
            placeholder="Type a valid reason"
            onChange={handleInput}
          />
        </div>

        <div className="common">
          <label className="label">Destination</label>
          <input
            type="text"
            name="destination"
            placeholder="Enter your destination"
            disabled={false}
            onChange={handleInput}
          />
        </div>

        <div className="common">
          <label className="label">Destination Contact</label>
          <input
            type="text"
            name="destination_contact"
            disabled={false}
            onChange={handleInput}
          />
        </div>

        <div className="common" style={{ marginBottom: "60px" }}>
          <label className="label">Send Approval To</label>
          <div className="dropdown">
            <ReactDropdown
              options={warden}
              placeholder="Select a warden"
            />
          </div>
        </div>
        <div className="common">
          <button className="button" type="submit">
            Apply Gatepass
          </button>
        </div>
      </form>
    </div>
  );
};

export default LFform;
