import React, { useEffect, useState } from "react";

const LFform = () => {
  const [FormValues, setFormValues] = useState(0);
  // const DepartureDate = `${FormalValues.departuretime}`
  const DepartureTime = "17:30:00";
  const ArrivalTime = "21:30:00";
  const [da, setDate] = useState("");
  // const [DepartureTime, setDepartureTime] = useState(0);
  // const [ArrivalDate, setArrivalDate] = useState(0);

  const current = new Date();
  const time = `${current.getHours()}${current.getMinutes()}`;
  console.log(time);
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  // useEffect(() => {
  //     fetch("http://192.168.9.230:4000/gatepass/v2/student/local_flexible_gatepass", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })

  //     .then((Response) => Response.json())
  //     .then((response) => console.log("success:", JSON.stringify(response)))
  //     .catch((err) => console.log("error:", err));
  // })

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      user_id: "00000087",
      from_date: "2022-11-30",
      from_time: "1970-01-01T00:00:00.000Z",
      to_date: "2022-12-01",
      to_time: "1970-01-01T00:00:00.000Z",
      purpose: "home visit",
      destination: "ynr",
      destination_contact: "8935241978",
      visit_to: "ynr",
      send_approval_to: "00000087",
    };

    fetch(
      "http://192.168.9.230:4000/gatepass/v2/student/local_flexible_gatepass",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      // .then((Response) => Response.json())
      .then((response) => console.log("success:", response.text()))
      .catch((err) => console.log("error:", err));
  };

  const applyGatepass = () => {
    // if (DepartureTime < time || time < ArrivalTime) {
    //     return true
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Departure Date</label>
        <input type="text" name="time" placeholder={date} disabled={true} />

        <label>Departure Time</label>
        <input
          type="text"
          name="time"
          placeholder={DepartureTime}
          disabled={true}
        />

        <label>Arrival Date</label>
        <input type="text" name="time" placeholder={date} disabled={true} />

        <label>Arrival Time</label>
        <input
          type="text"
          name="time"
          placeholder={ArrivalTime}
          disabled={true}
        />

        <label>Purpose</label>
        <input
          type="text"
          name="purpose"
          placeholder="Type a valid reason"
          disabled={false}
          value={da}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" disabled={applyGatepass}>
        Apply Gatepass
      </button>
    </form>
  );
};

export default LFform;
