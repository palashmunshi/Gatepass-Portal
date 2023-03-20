import React, { useState, useEffect } from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import "../admin.scss";
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
  // const role = [
  //   "Admin",
  //   "Chief Warden",
  //   "Warden",
  //   "Guard",
  //   "BCH",
  //   "Student",
  //   "No Access",
  //   "Other",
  // ];
  // const status = ["Present", "Absent", "Gone"];
  const [user, setUser] = useState([]);
  const [role, setRole] = useState([]);
  const [status, setStatus] = useState([]);
  const [newRole, setNewRole] = useState({ role_name: null, role_id: null });
  const [newStatus, setNewStatus] = useState({ status: null });
  useEffect(() => {
    fetch("http://127.0.0.1:4000/gatepass/v2/admin/all_role")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setRole(text);
      });
    console.log(role);

    fetch("http://127.0.0.1:4000/gatepass/v2/admin/all_status")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setStatus(text);
      });
    console.log(status);

    fetch("http://127.0.0.1:4000/gatepass/v2/admin/user_role")
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setUser(text);
      });
    console.log(user);
  }, []);

  const changeRoleOrStatus = async (user_id, status, role_id) => {
    let fetchData = await fetch(
      "http://127.0.0.1:4000/gatepass/v2/admin/update_role_and_status",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user_id,
          status: status,
          role_id: role_id,
        }),
      }
    )
      .then((Response) => Response.json())
      .then((response) => console.log("Success: " + response.msg))
      .catch((error) => console.log("error: " + error));
    return fetchData;
  };

  const handleRoleDropdown = (event) => {
    const roleName = event.value;
    const roleobj = role.filter((obj) => {
      return obj.role_name == roleName;
    });
    const roleID = roleobj[0].role_id;
    setNewRole({ role_name: roleName, role_id: roleID });
  };

  const handleStatusDropdown = (event) => {
    const StatusName = event.value;
    setNewStatus({ status: StatusName });
  };

  const handleClick = async (event) => {
    const userID = event.target.id;
    changeRoleOrStatus(userID, newStatus.status, newRole.role_id);
    window.location.reload(true);
  };

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
                    <TableCell className="tableCell">
                      {row.employeename}
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.employeerole}
                    </TableCell>
                    <TableCell className="tableCell">
                      <Dropdown
                        options={role.map((props) => props.role_name)}
                        style={{ borderRadius: "40" }}
                        placeholder="Select a role"
                        onChange={handleRoleDropdown}
                        id={row.employeecode}
                      />
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.employeestatus}
                    </TableCell>
                    <TableCell className="tableCell">
                      <Dropdown
                        options={status.map((props) => props.status)}
                        style={{ borderRadius: "40" }}
                        placeholder="Select a status"
                        onChange={handleStatusDropdown}
                      />
                    </TableCell>
                    <TableCell className="tableCell">
                      <button
                        type="button"
                        style={{
                          background: "green",
                          color: "#fff",
                          borderRadius: "5px",
                        }}
                        id={row.employeecode}
                        onClick={handleClick}
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
