import React, { useState, useEffect } from "react";
import "./checkinDetails.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const CheckinDetails = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    
      fetch(
        "http://127.0.0.1:4000/gatepass/v2/guard/checked_out_students"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUser(data);
        })
        .catch((err) => console.log("error:", err));
    }, []
  );

  return (
    <div className="listContainer">
      <div className="listTitle">Check-In Dashboard</div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell className="tableCell" id="title">User Details</TableCell>
              <TableCell className="tableCell" id="title">Contact</TableCell>
              <TableCell className="tableCell" id="title">Gatepass Type</TableCell>
              <TableCell className="tableCell" id="title">Actual Departure</TableCell>
              <TableCell className="tableCell" id="title">Expected Arrival</TableCell>
              <TableCell className="tableCell" id="title">Status</TableCell>
              <TableCell className="tableCell" id="title">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {user.map((props) => (
              <TableRow key={props.user_id}>
                <TableCell className="tableCell">{props.name} <br/> {props.user_id} </TableCell>
                <TableCell className="tableCell">{props.contact_number}</TableCell>
                <TableCell className="tableCell">{props.gatepass_name}</TableCell>
                <TableCell className="tableCell">{new Date(props.from_date).toLocaleDateString()} <br/> {new Date(props.from_time).toLocaleTimeString()}</TableCell>
                <TableCell className="tableCell">{new Date(props.to_date).toLocaleDateString()} <br/> {new Date(props.to_time).toLocaleTimeString()}</TableCell>
                <TableCell className="tableCell">{props.status}</TableCell>
                <TableCell className="tableCell"><button id="button1">Check In</button></TableCell>
                </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
