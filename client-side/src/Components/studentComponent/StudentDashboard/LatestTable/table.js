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
    fetch("http://192.168.9.230:4000/gatepass/v2/admin/today_gatepass")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setStudentGP(text);
      });
      console.log(StudentGP)
    })

    function changeDate(val) {
      const d = new Date(val)
      console.log(d.getDate())
      return d.getDate()
    }
    
    

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Applied On</TableCell>
            <TableCell className="tableCell">Gatepass Type</TableCell>
            <TableCell className="tableCell">Departure On</TableCell>
            {/* <TableCell className="tableCell">Destination</TableCell> */}
            <TableCell className="tableCell">Status</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {StudentGP.map((row) => (
            <TableRow key={row.user_id}>
              <TableCell className="tableCell">{row.user_id}</TableCell>
              <TableCell className="tableCell">{row.gatepass_type}</TableCell>
              <TableCell className="tableCell">{row.from_date}</TableCell>
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

export default StudentDashboard;