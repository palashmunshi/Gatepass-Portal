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
  // const [limit, setLimit] = useState("")
  // const [outTime, setOutTime] = useState("")
  // const [inTime, setInTime] = useState("")
  // const [arrivalUB, setArrivalUB] = useState("")
  // const [arrivalLB, setArrivalLB] = useState("")
  // const [flex, setFlex] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/parameter_config")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setParameter(text);
      });
    console.log(parameter);
  });

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
                {parameter.map((row) => (
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
                      >
                        Change
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
