import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";

const StudentDashboard = () => {
  const [StudentGP, setStudentGP] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/student/recent_gatepass/00000087")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setStudentGP(text);
      });
      console.log(StudentGP)
    })

    function changeDate(val) {
      const date = `${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`;
      return date
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
            <TableRow key={row.user_id}>
              <TableCell className="tableCell">changeDate({row.applied_time})</TableCell>
              <TableCell className="tableCell">{row.applied_time}</TableCell>
              <TableCell className="tableCell">{row.gatepass_type}</TableCell>
              <TableCell className="tableCell">{row.from_date}</TableCell>
              <TableCell className="tableCell">{row.from_time}</TableCell>
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