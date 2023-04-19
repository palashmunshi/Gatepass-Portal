import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";

const List = () => {
  const [LatestGP, setLatestGP] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/today_gatepass")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setLatestGP(text);
      });
    console.log(LatestGP);
  });

  function changeDate(val) {
    let date = new Date();
    date = `${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`;
    console.log("date", date);
    return date;
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Gatepass Type</TableCell>
            <TableCell className="tableCell">Departure Date</TableCell>
            <TableCell className="tableCell">Departure Time</TableCell>
            <TableCell className="tableCell">Arrival Date</TableCell>
            <TableCell className="tableCell">Arrival Time</TableCell>
            <TableCell className="tableCell">Destination</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {LatestGP.map((gp) => (
            <TableRow key={gp.request_id}>
              <TableCell>{gp.user_id}</TableCell>
              <TableCell>{gp.gatepass_type}</TableCell>
              <TableCell>{gp.from_date.substring(0, 10)}</TableCell>
              <TableCell>{gp.from_time.substring(11, 16)}</TableCell>
              <TableCell>{gp.to_date.substring(0, 10)}</TableCell>
              <TableCell>{gp.to_time.substring(11, 16)}</TableCell>
              <TableCell>{gp.destination}</TableCell>
              <TableCell>{gp.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
