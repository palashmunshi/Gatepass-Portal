import React from "react";
import "./checkinDetails.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const CheckinDetails = () => {
  return (
    <div className="listContainer">
      <div className="listTitle">Check-In Dashboard</div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">S.No.</TableCell>
              <TableCell className="tableCell">Enrollment</TableCell>
              <TableCell className="tableCell">Out Time</TableCell>
              <TableCell className="tableCell">Check In</TableCell>

              <TableCell className="tableCell"></TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
};
