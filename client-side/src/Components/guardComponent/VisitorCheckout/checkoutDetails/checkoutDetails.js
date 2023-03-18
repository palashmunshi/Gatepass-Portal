import React, { useState, useEffect } from "react";
import "./checkoutDetails.scss";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableBody } from "@mui/material";
import moment from "moment";
import { sortBy } from "lodash";


export const CheckoutDetails = () => {
  const [user, setUser] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       fetch("http://localhost:4000/gatepass/v2/guard/approved_students")
//         .then((response) => {
//           return response.json();
//         })
//         .then((text) => {
//           setUser(text);
//         });
//     }
//     fetchData();
//     const id = setInterval(() => {
//       fetchData();
//     }, 300000);

//     return () => clearInterval(id);
//   }, []);
  const sortedUser = sortBy(user, [(o) => moment(o.from_date).unix(), (o) => moment(o.from_time).unix()]);


//   const checkoutStudent = async (user_id, request_id) => {
//     let fetchData = fetch(
//       "http://127.0.0.1:4000/gatepass/v2/guard/checkout_student/",
//       {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           check_out_by: "nugr11",
//           user_id: user_id,
//           request_id: request_id,
//         }),
//       }
//     )
//       .then((Response) => Response.json())
//       .then((response) => console.log("Success: " + response.msg))
//       .catch((error) => console.log("error: " + error));
//     return fetchData;
//   };

//   const updateUserStatus = async (user_id) => {
//     let fetchData = fetch(
//       "http://127.0.0.1:4000/gatepass/v2/guard/update_user_status_absent/",
//       {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           user_id: user_id,
//         }),
//       }
//     )
//       .then((Response) => Response.json())
//       .then((response) => console.log("success: " + response.msg))
//       .catch((error) => console.log("error: " + error));
//     return fetchData;
//   };

//   const handleApprove = async (event) => {
//     const request_id = event.target.name;
//     const currentUser = user.filter((obj) => {
//       return obj.request_id == request_id;
//     });
//     // console.log(currentUser[0].user_id);
//     const user_id = currentUser[0].user_id;
//     await checkoutStudent(user_id, request_id);
//     await updateUserStatus(user_id);
//     window.location.reload(true);
//   };

return (
  <div className="listContainer">
    <div className="listTitle">Visitor Check-Out Dashboard</div>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" id="title">
              Student (to Meet)
            </TableCell>
            <TableCell className="tableCell" id="title">
              Visitor Name
            </TableCell>
            <TableCell className="tableCell" id="title">
              Purpose Of Visit
            </TableCell>

            <TableCell className="tableCell" id="title">
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedUser.map((props) => (
            <TableRow key={props.request_id}>
              <TableCell className="tableCell">
                {props.name} <br /> {props.user_id}{" "}
              </TableCell>
              <TableCell className="tableCell">
                {props.contact_number}
              </TableCell>
              <TableCell className="tableCell">
                {props.gatepass_name}
              </TableCell>
           
              <TableCell className="tableCell">{props.status}</TableCell>
              <TableCell className="tableCell">
                <button
                  id="button2"
                  // onClick={handleApprove}
                  name={props.request_id}
                >
                  Check In
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);
};