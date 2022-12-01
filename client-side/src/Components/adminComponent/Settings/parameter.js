import React from "react";
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


export const Parameter = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="listContainer">
            <div className="listTitle">Parameter Config</div>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">S.No.</TableCell>
                            <TableCell className="tableCell">Parameters</TableCell>
                            <TableCell className="tableCell">Current Value</TableCell>
                            <TableCell className="tableCell">Change To</TableCell>
                            <TableCell className="tableCell"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className="tableCell">1</TableCell>
                            <TableCell className="tableCell">Week Limit</TableCell>
                            <TableCell className="tableCell">2</TableCell>
                            <TableCell className="tableCell">
                                <input
                                    className="e-input"
                                    //value={name}
                                    //onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder=""
                                />
                            </TableCell>
                            <TableCell className="tableCell">
                                <button
                                type="button" 
                                style={{ background: "green", color: "#fff", borderRadius: "5px" }}
                                >
                                    Change
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tableCell">2</TableCell>
                            <TableCell className="tableCell">Out Time</TableCell>
                            <TableCell className="tableCell">21:59:59</TableCell>
                            <TableCell className="tableCell">
                                <input
                                    className="e-input"
                                    //value={name}
                                    //onChange={(e) => setName(e.target.value)}
                                    type="time"
                                    step="2"
                                    placeholder=""
                                />
                            </TableCell>
                            <TableCell className="tableCell">
                                <button
                                type="button" 
                                style={{ background: "green", color: "#fff", borderRadius: "5px" }}
                                >
                                    Change
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tableCell">3</TableCell>
                            <TableCell className="tableCell">In Time</TableCell>
                            <TableCell className="tableCell">22:00:00</TableCell>
                            <TableCell className="tableCell">
                                <input
                                    className="e-input"
                                    //value={name}
                                    //onChange={(e) => setName(e.target.value)}
                                    type="time"
                                    step="2"
                                    placeholder=""
                                />
                            </TableCell>
                            <TableCell className="tableCell">
                                <button
                                type="button" 
                                style={{ background: "green", color: "#fff", borderRadius: "5px" }}
                                >
                                    Change
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tableCell">4</TableCell>
                            <TableCell className="tableCell">Arrival Restrict UB</TableCell>
                            <TableCell className="tableCell">22:00:00</TableCell>
                            <TableCell className="tableCell">
                                <input
                                    className="e-input"
                                    //value={name}
                                    //onChange={(e) => setName(e.target.value)}
                                    type="time"
                                    step="2"
                                    placeholder=""
                                />
                            </TableCell>
                            <TableCell className="tableCell">
                                <button
                                type="button" 
                                style={{ background: "green", color: "#fff", borderRadius: "5px" }}
                                >
                                    Change
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tableCell">5</TableCell>
                            <TableCell className="tableCell">Arrival Restrict LB</TableCell>
                            <TableCell className="tableCell">06:00:00</TableCell>
                            <TableCell className="tableCell">
                                <input
                                    className="e-input"
                                    //value={name}
                                    //onChange={(e) => setName(e.target.value)}
                                    type="time"
                                    step="2"
                                    placeholder=""
                                />
                            </TableCell>
                            <TableCell className="tableCell">
                                <button
                                type="button" 
                                style={{ background: "green", color: "#fff", borderRadius: "5px" }}
                                >
                                    Change
                                </button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="tableCell">6</TableCell>
                            <TableCell className="tableCell">Flexible Entry(In Minutes)</TableCell>
                            <TableCell className="tableCell">1</TableCell>
                            <TableCell className="tableCell">
                                <input
                                    className="e-input"
                                    //value={name}
                                    //onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder=""
                                />
                            </TableCell>
                            <TableCell className="tableCell">
                                <button
                                type="button" 
                                style={{ background: "green", color: "#fff", borderRadius: "5px" }}
                                >
                                    Change
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div> 
      </div>
    </div>
  );
};
