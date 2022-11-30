import React, { useEffect, useState } from 'react'

const LFform = () => {

    const [FormValues, setFormValues] = useState(0);
    // const DepartureDate = `${FormalValues.departuretime}`
    const DepartureTime = "2030";
    const ArrivalTime = "2130";
    // const [DepartureTime, setDepartureTime] = useState(0);
    // const [ArrivalDate, setArrivalDate] = useState(0);

    const current = new Date();
    const time = `${current.getHours()}${current.getMinutes()}`
    console.log(time)
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    useEffect(() => {
        fetch("http://192.168.9.230:4000/gatepass/v2/admin/pending_request")
        .then((response) => {
            return response.json();
        })
        .then((text) => {
            setFormValues(text);
        });
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your state values: \n 
                email: ${date} \n  
                You can replace this alert with your process`);
    };

    const applyGatepass = () => {
        if (DepartureTime < time || time < ArrivalTime) {
            return true
        }
    }

    
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email address</label>
            <input
              type="text"
              name="time"
              placeholder= {DepartureTime}
              disabled={true}
            />
          </div>
          <button type="submit" disabled={applyGatepass}>
            Apply Gatepass
          </button>
        </form>
    )
}

export default LFform;