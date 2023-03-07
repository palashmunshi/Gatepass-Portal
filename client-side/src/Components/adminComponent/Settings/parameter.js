import React, { useEffect, useState } from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import "../admin.scss";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Parameter = () => {
  const [parameter, setParameter] = useState([]);

  const [limit, setLimit] = useState(0);
  const [inTime, setInTime] = useState("00:00:00");
  const [outTime, setOutTime] = useState("00:00:00");
  const [arrivalUB, setArrivalUB] = useState("00:00:00");
  const [arrivalLB, setArrivalLB] = useState("00:00:00");
  const [flex, setFlex] = useState(0);

  const [newLimit, setNewLimit] = useState(0);
  const [newInTime, setNewInTime] = useState("00:00:00");
  const [newOutTime, setNewOutTime] = useState("00:00:00");
  const [newArrivalUB, setNewArrivalUB] = useState("00:00:00");
  const [newArrivalLB, setNewArrivalLB] = useState("00:00:00");
  const [newFlex, setNewFlex] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config")
      .then((response) => response.json())
      .then((text) => {
        setParameter(text);
      });

    console.log(parameter);
    if (parameter.length != 0) {
      setLimit(parameter[0]["value"]);
      setOutTime(parameter[1]["value"]);
      setInTime(parameter[2]["value"]);
      setArrivalUB(parameter[3]["value"]);
      setArrivalLB(parameter[4]["value"]);
      setFlex(parameter[5]["value"]);
    }

    // console.log(parameter[4]["value"]);
  });

  const refresh = () => window.location.reload(true);
  const handleClick = (event) => {
    // console.log(event.target.name);
    switch (event.target.name) {
      case "limit": {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: newLimit }),
        };
        fetch(
          "http://127.0.0.1:4000/gatepass/v2/admin/parameter_config/week_limit/1",
          requestOptions
        );
        refresh();
        break;
      }
      case "outTime": {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: newOutTime }),
        };
        fetch(
          "http://127.0.0.1:4000/gatepass/v2/admin/parameter_config/out_time/2",
          requestOptions
        );
        break;
      }
      case "inTime": {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: newInTime }),
        };
        fetch(
          "http://127.0.0.1:4000/gatepass/v2/admin/parameter_config/in_time/3",
          requestOptions
        );
        break;
      }
      case "arrivalUB": {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: newArrivalUB }),
        };
        fetch(
          "http://127.0.0.1:4000/gatepass/v2/admin/parameter_config/arrival_restrict_ub/4",
          requestOptions
        );
        break;
      }
      case "arrivalLB": {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: newArrivalLB }),
        };
        fetch(
          "http://127.0.0.1:4000/gatepass/v2/admin/parameter_config/arrival_restrict_lb/5",
          requestOptions
        );
        break;
      }
      case "flex": {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: newFlex }),
        };
        fetch(
          "http://127.0.0.1:4000/gatepass/v2/admin/parameter_config/flexible_entry/6",
          requestOptions
        );
        break;
      }
    }
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Parameter Config</div>
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">S.No.</TableCell>
                  <TableCell className="tableCell">Parameters</TableCell>
                  <TableCell className="tableCell">Current Value</TableCell>
                  <TableCell className="tableCell">Change To</TableCell>
                  <TableCell className="tableCell"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="tableCell">1</TableCell>
                  <TableCell className="tableCell">Week Limit</TableCell>
                  <TableCell className="tableCell">{limit}</TableCell>
                  <TableCell className="tableCell">
                    <input
                      className="e-input"
                      type="number"
                      placeholder=""
                      onChange={(event) => {
                        setNewLimit(event.target.value);
                      }}
                    ></input>
                  </TableCell>
                  <TableCell className="tableCell">
                    <button
                      type="button"
                      name="limit"
                      style={{
                        background: "brown",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                      onClick={handleClick}
                    >
                      Change
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="tableCell">2</TableCell>
                  <TableCell className="tableCell">Out Time</TableCell>
                  <TableCell className="tableCell">{outTime}</TableCell>
                  <TableCell className="tableCell">
                    <input
                      className="e-input"
                      type="text"
                      placeholder=""
                      onChange={(event) => {
                        setNewOutTime(event.target.value);
                      }}
                    ></input>
                  </TableCell>
                  <TableCell className="tableCell">
                    <button
                      type="button"
                      name="outTime"
                      style={{
                        background: "brown",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                      onClick={handleClick}
                    >
                      Change
                    </button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="tableCell">3</TableCell>
                  <TableCell className="tableCell">In Time</TableCell>
                  <TableCell className="tableCell">{inTime}</TableCell>
                  <TableCell className="tableCell">
                    <input
                      className="e-input"
                      type="text"
                      placeholder=""
                      onChange={(event) => {
                        setNewInTime(event.target.value);
                      }}
                    ></input>
                  </TableCell>
                  <TableCell className="tableCell">
                    <button
                      type="button"
                      name="inTime"
                      style={{
                        background: "brown",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                      onClick={handleClick}
                    >
                      Change
                    </button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="tableCell">4</TableCell>
                  <TableCell className="tableCell">
                    Arrival Restrict UB
                  </TableCell>
                  <TableCell className="tableCell">{arrivalUB}</TableCell>
                  <TableCell className="tableCell">
                    <input
                      className="e-input"
                      type="text"
                      placeholder=""
                      onChange={(event) => {
                        setNewArrivalUB(event.target.value);
                      }}
                    ></input>
                  </TableCell>
                  <TableCell className="tableCell">
                    <button
                      type="button"
                      name="arrivalUB"
                      style={{
                        background: "brown",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                      onClick={handleClick}
                    >
                      Change
                    </button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="tableCell">5</TableCell>
                  <TableCell className="tableCell">
                    Arrival Restrict LB
                  </TableCell>
                  <TableCell className="tableCell">{arrivalLB}</TableCell>
                  <TableCell className="tableCell">
                    <input
                      className="e-input"
                      type="text"
                      placeholder=""
                      onChange={(event) => {
                        setNewArrivalLB(event.target.value);
                      }}
                    ></input>
                  </TableCell>
                  <TableCell className="tableCell">
                    <button
                      type="button"
                      name="arrivalLB"
                      style={{
                        background: "brown",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                      onClick={handleClick}
                    >
                      Change
                    </button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="tableCell">6</TableCell>
                  <TableCell className="tableCell">
                    Flexible Entry(In Minutes)
                  </TableCell>
                  <TableCell className="tableCell">{flex}</TableCell>
                  <TableCell className="tableCell">
                    <input
                      className="e-input"
                      type="number"
                      placeholder=""
                      onChange={(event) => {
                        setNewFlex(event.target.value);
                      }}
                    ></input>
                  </TableCell>
                  <TableCell className="tableCell">
                    <button
                      type="button"
                      name="flex"
                      style={{
                        background: "brown",
                        color: "#fff",
                        borderRadius: "5px",
                      }}
                      onClick={handleClick}
                    >
                      Change
                    </button>
                  </TableCell>
                </TableRow>

                {/* {parameter.map((row) => (
                  <TableRow key={row.param_id}>
                    <TableCell className="tableCell">{row.param_id}</TableCell>
                    <TableCell className="tableCell">{row.parameter}</TableCell>
                    <TableCell className="tableCell">{row.value}</TableCell>
                    <TableCell className="tableCell">
                      <input
                        className="e-input"
                        //value={name}
                        //onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder=""
                      />
                    </TableCell>
                    <TableCell className="tableCell">
                      <button
                        type="button"
                        style={{
                          background: "green",
                          color: "#fff",
                          borderRadius: "5px",
                        }}
                        onClick={handleClick}
                      >
                        Change
                      </button>
                    </TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
