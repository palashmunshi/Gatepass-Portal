import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const List = () => {
  const [LatestGP, setLatestGP] = useState([]);
  const accessToken = Cookies.get("ACCESS_TOKEN");

  useEffect(() => {
    fetch(
      "http:/127.0.0.1:4000/gatepass/v2/warden/gatepass_approve_or_reject/129707/1",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setLatestGP(text);
      });
    console.log(LatestGP);
  });

  function changeDate(val) {
    const d = new Date(val);
    console.log(d.getDate());
    return d.getDate();
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Gatepass Type</TableCell>
            <TableCell className="tableCell">Departure</TableCell>
            <TableCell className="tableCell">Actual Departure</TableCell>
            <TableCell className="tableCell">Arrival</TableCell>
            <TableCell className="tableCell">Actual Arrival</TableCell>
            <TableCell className="tableCell">Destination</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {LatestGP.map((row) => (
            <TableRow key={row.user_id}>
              <TableCell className="tableCell">{row.user_id}</TableCell>
              <TableCell className="tableCell">{row.gatepass_type}</TableCell>
              <TableCell className="tableCell">{row.from_date}</TableCell>
              <TableCell className="tableCell">{row.actual_out_time}</TableCell>
              <TableCell className="tableCell">{row.to_date}</TableCell>
              <TableCell className="tableCell">{row.actual_in_time}</TableCell>
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
