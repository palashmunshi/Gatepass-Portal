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
import jwt_decode from "jwt-decode";

const StudentDashboard = () => {
  const [StudentGP, setStudentGP] = useState([]);
  // const [userDetails, setUserDetails] = useState([]);
  const accessToken = Cookies.get("ACCESS_TOKEN");
  const decoded = jwt_decode(accessToken);
  const userDetails = decoded.data;

  useEffect(() => {
    let details;

    async function fetchData() {
      const response = await fetch(
        `http://127.0.0.1:4000/gatepass/v2/user_details/${userDetails.email_id}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      const data = await response.json();
      details = data;

      fetch(`http://127.0.0.1:4000/gatepass/v2/student/recent_gatepass/`, {
        headers: {
          Authorization: accessToken,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((text) => {
          setStudentGP(text);
        });
    }

    fetchData();
  }, []);

  function changeToDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getUTCDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  function changeToTime(timestamp) {
    const date = new Date(timestamp);
    const time = date.toISOString().substr(11, 8);
    return time;
  }

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Applied On</TableCell>
            <TableCell className="tableCell">Applied Time</TableCell>
            <TableCell className="tableCell">Gatepass Type</TableCell>
            <TableCell className="tableCell">From Date</TableCell>
            <TableCell className="tableCell">From Time</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {StudentGP.map((row) => (
            <TableRow key={row.applied_time}>
              <TableCell className="tableCell">
                {changeToDate(row.applied_date)}
              </TableCell>
              <TableCell className="tableCell">
                {changeToTime(row.applied_time)}
              </TableCell>
              <TableCell className="tableCell">{row.gatepass_name}</TableCell>
              <TableCell className="tableCell">
                {changeToDate(row.from_date)}
              </TableCell>
              <TableCell className="tableCell">
                {changeToTime(row.from_time)}
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentDashboard;
