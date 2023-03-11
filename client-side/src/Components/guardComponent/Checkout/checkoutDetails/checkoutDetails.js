import React, { useState, useEffect } from "react";
import "./checkoutDetails.scss";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableBody } from "@mui/material";


export const CheckoutDetails = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/gatepass/v2/guard/approved_students")
      .then((response) => {
        return response.json();
      }).then((text) => {
        setUser(text);
      });
  }, []);

  const handleApprove = (item) => {
    // to be added later by some knowledgeble creature
  };

  return (
    <div className="listContainer">
      <div className="listTitle">Check-Out Dashboard</div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">name</TableCell>
              <TableCell className="tableCell">cno.</TableCell>
              <TableCell className="tableCell">gatepass_name</TableCell>
              <TableCell className="tableCell">from date</TableCell>
              <TableCell className="tableCell">from time</TableCell>
              <TableCell className="tableCell">to date</TableCell>
              <TableCell className="tableCell">to time</TableCell>
              <TableCell className="tableCell">status</TableCell>
              <TableCell className="tableCell"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user.map((item) => (
              <TableRow key={item.contact_number}>
                <TableCell className="tableCell">{item.name}</TableCell>
                <TableCell className="tableCell">{item.contact_number}</TableCell>
                <TableCell className="tableCell">{item.gatepass_name}</TableCell>
                <TableCell className="tableCell">{new Date(item.from_date).toLocaleDateString()}</TableCell>
                <TableCell className="tableCell">{new Date(item.from_time).toLocaleTimeString()}</TableCell>
                <TableCell className="tableCell">{new Date(item.to_date).toLocaleDateString()}</TableCell>
                <TableCell className="tableCell">{new Date(item.to_time).toLocaleTimeString()}</TableCell>
                <TableCell className="tableCell">{item.status}</TableCell>
                <TableCell className="tableCell"><button>Accept</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
