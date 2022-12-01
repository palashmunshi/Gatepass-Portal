import React, {useState, useEffect} from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import '../admin.scss'
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dropdown from "react-dropdown";


export const ChangeRole = () => {
  const role=["Admin", "Chief Warden", "Warden", "Guard", "BCH", "Student", "No Access", "Other"]; 
  const status=["Present", "Absent", "Gone"];  
  const [user, setUser] = useState([])
  
  useEffect(() => {
    fetch("http://192.168.9.230:4000/gatepass/v2/admin/user_role")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setUser(text);
      });
      console.log(user)
    })
  
    return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
            <div className="listTitle">Change Role</div>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">Name</TableCell>
                            <TableCell className="tableCell">Current Role</TableCell>
                            <TableCell className="tableCell">Change Role</TableCell>
                            <TableCell className="tableCell">Current Status</TableCell>
                            <TableCell className="tableCell">Change Status</TableCell>
                            <TableCell className="tableCell"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((row) => (
                            <TableRow key={row.employeecode}>
                                <TableCell className="tableCell">{row.employeename}</TableCell>
                                <TableCell className="tableCell">{row.employeerole}</TableCell>
                                <TableCell className="tableCell">
                                    <Dropdown
                                        options={role}
                                        style={{ borderRadius: "40" }}
                                        placeholder="Select a role"
                                    />
                                </TableCell>
                                <TableCell className="tableCell">{row.employeestatus}</TableCell>
                                <TableCell className="tableCell">
                                    <Dropdown
                                        options={status}
                                        style={{ borderRadius: "40" }}
                                        placeholder="Select a status"
                                    />
                                </TableCell>
                                <TableCell className="tableCell">
                                    <button
                                    type="button" 
                                    style={{ background: "green", color: "#fff", borderRadius: "5px" }}
                                    >
                                        Save
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div> 
      </div>
    </div>
  );
};
