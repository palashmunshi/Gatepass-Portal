import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const AllPendingRequest = () => {
  const [LatestGP, setLatestGP] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/all_pending_request")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setLatestGP(text);
      });
    console.log(LatestGP);
  });

  return (
    <div className="popup">
      <Popup
        className="container"
        trigger={<label className="link">All Pending Request</label>}
      >
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 650, minWidth: 650 }}
          className="table"
        >
          <Table
            sx={{ maxWidth: 650, minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Employee ID</TableCell>
                <TableCell className="tableCell">Employee Name</TableCell>
                <TableCell className="tableCell">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {LatestGP.map((row) => (
                <TableRow key={row.employee_id}>
                  <TableCell className="tableCell">{row.employee_id}</TableCell>
                  <TableCell className="tableCell">
                    {row.employee_name}
                  </TableCell>
                  <TableCell className="tableCell">{row.TOTAL}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Popup>
    </div>
  );
};
