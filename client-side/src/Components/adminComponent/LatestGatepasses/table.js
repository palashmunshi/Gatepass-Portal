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
    fetch("http://172.19.23.69:4000/gatepass/v2/admin/today_gatepass")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setLatestGP(text);
      });
      console.log(LatestGP)
    })
    

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Gatepass Type</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Warden</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {LatestGP.map((row) => (
            <TableRow key={row.user_id}>
              <TableCell className="tableCell">{row.punch_id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {row.gatepass_type}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.visit_to}</TableCell>
              <TableCell className="tableCell">{row.from_date}</TableCell>
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