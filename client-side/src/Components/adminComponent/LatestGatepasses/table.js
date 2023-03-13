import "./table.scss";
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
          {LatestGP.map((row) => (
            <TableRow key={row.request_id}>
              <TableCell className="tableCell">{row.user_id}</TableCell>
              <TableCell className="tableCell">{row.gatepass_type}</TableCell>
              <TableCell className="tableCell">
                {changeDate(Date(row.from_date))}
              </TableCell>
              <TableCell className="tableCell">{row.from_time}</TableCell>
              <TableCell className="tableCell">{row.to_date}</TableCell>
              <TableCell className="tableCell">{row.to_time}</TableCell>
              <TableCell className="tableCell">{row.destination}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
