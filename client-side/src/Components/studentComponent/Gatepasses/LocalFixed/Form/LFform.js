import React, { useEffect, useState, useReducer } from "react";
import ReactDropdown from "react-dropdown";
import "./style.scss";
import Cookies from "js-cookie";

const LFform = (props) => {
  const accessToken = Cookies.get("ACCESS_TOKEN");
  const [localFixedUsed, setLocalFixedUsed] = useState(0);
  const [lastMondayDate, setLastMondayDate] = useState("0000-00-00");
  const [nextMondayDate, setNextMondayDate] = useState("0000-00-00");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let currentDate = "";
    let lastMonday = "";
    let nextMonday = "";

    const fetchData = async () => {
      await fetch("http://127.0.0.1:4000/gatepass/v2/student/get_dates", {
        headers: { Authorization: accessToken },
      })
        .then((Response) => Response.json())
        .then((response) => {
          currentDate = response.currentDate;
          lastMonday = response.lastMonday;
          nextMonday = response.nextMonday;
          setCurrentDate(response.currentDate);
          setLastMondayDate(response.lastMonday);
          setNextMondayDate(response.nextMonday);
        });
      await fetch(
        "http://127.0.0.1:4000/gatepass/v2/student/get_number_of_local_fixed_student/" +
          `${lastMonday}/` +
          `${nextMonday}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
        .then((Response) => Response.text())
        .then((response) => {
          setLocalFixedUsed(response);
        })
        .catch((err) => console.log("error:", err));
    };
    fetchData();
  }, []);

  const getDates = () => {
    fetch("http://localhost:4000/gatepass/v2/student/get_dates")
      .then((Response) => Response.json())
      .then((response) => {
        setLastMondayDate(response.lastMonday);
        setNextMondayDate(response.nextMonday);
      });
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

  const checkTime = () => {
    let currentTime = "";
    fetch("http://127.0.0.1:4000/gatepass/v2/student/get_dates", {
      headers: { Authorization: accessToken },
    })
      .then((Response) => Response.json())
      .then((response) => {
        currentTime = response.currentTime;
      });
    if (
      props.departureTime <= currentTime &&
      currentTime <= props.arrivalTime
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkApprovedOrCheckedout = async () => {
    const fetchData = await fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/get_bool_student_checkedout_autoapproved/",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
      .then((Response) => Response.json())
      .then((response) => {
        return response.row_affected;
      })
      .catch((err) => console.log("error: ", err));
    return fetchData;
  };

  const checkLocalFixed = async () => {
    const res1 = checkTime();
    const res3 = await checkBlacklist();
    const res4 = await checkApprovedOrCheckedout();

    if (res3 == true) {
      alert("Cannot Apply: You are blacklisted, you cannot apply for Gatepass");
      return false;
    } else if (localFixedUsed >= props.weekLimit) {
      alert(
        "Cannot Apply: You have exhausted all your weekly Local Fixed Gatepass "
      );
      return false;
    } else if (res4 != 0) {
      alert(
        "Cannot Apply: You have already applied for a Local Fixed Gatepass"
      );
      return false;
    } else if (res1 == false) {
      alert("Cannot Apply: You cannot apply a gatepass in the outside hours");
      return false;
    } else {
      return true;
    }
  };

  const applyLocalFixedGatepass = async () => {
    let fetchData = fetch(
      "http://127.0.0.1:4000/gatepass/v2/student/apply_local_fixed",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify({
          punch_id: null,
          from_date: currentDate,
          from_time: props.departureTime,
          to_date: currentDate,
          to_time: props.arrivalTime,
        }),
      }
    )
      .then((Response) => Response.json())
      .then((response) => response)
      .catch((error) => console.log("error: " + error));

    return fetchData;
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const check = await checkLocalFixed();

    if (check == true) {
      await applyLocalFixedGatepass();
      alert("You have successfuly applied for Local Fixed Gatepass!");
    }
  };

  return (
    <div className="lfform">
      <div className="link">
        You have {props.weekLimit - localFixedUsed} gatepasses left on
        autoapproval
      </div>
      <form className="form">
        <div className="common">
          <label className="label">Departure Date</label>
          <input
            type="text"
            name="from_date"
            placeholder={currentDate}
            disabled={true}
          />
        </div>
        <div className="common">
          <label className="label">Departure Time</label>

          <input disabled={true} placeholder={props.departureTime} />
        </div>
        <div className="common">
          <label className="label">Arrival Date</label>
          <input
            type="text"
            name="to_date"
            placeholder={currentDate}
            disabled={true}
          />
        </div>

        <div className="common">
          <label className="label">Arrival Time</label>
          <input disabled={true} placeholder={props.arrivalTime} />
        </div>
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
