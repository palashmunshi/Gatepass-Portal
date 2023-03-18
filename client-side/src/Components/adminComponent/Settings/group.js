
import React, { useState, useEffect } from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import "./group.scss";


export const Group = () => {
  const [groups, setGroups] = useState([]);
  const [subgroups, setSubgroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/gatepass/v2/admin/get_all_groups")
      .then((response) => response.json())
      .then((data) => setGroups(data))
      .catch((error) => console.log(error));

      fetch("http://localhost:4000/gatepass/v2/admin/get_all_sub_groups")
      .then((response) => response.json())
      .then((data) => setSubgroups(data))
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="MultyGroupDesign">
          <div className="GroupDesign">
            <div className="Align">
              <div id="heading">
                <h5>Add/Update Groups</h5>  
              </div>
            </div>
            <div className="search3">
              <input type="text" placeholder="Make a new group" id="search1"></input>
              <button id="add">+</button>
              <table className="table1">
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Master ID</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.gps_groupid}>
                  <td>{group.gps_groupid}</td>
                  <td>{group.gps_groupname}</td>
                  <td>{group.gps_group_mastergroup_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          </div>
          <div className="GroupDesign">
            <div className="Align">
              <div id="heading">
                <h5>Add/Update SubGroups</h5>
              </div>
            </div>
            <div className="search3">
              <input type="text" placeholder="Make a new subgroup" id="search1"></input>
              <button id="add">+</button>
              <table className="table1">
                <thead>
                  <tr>
                    <th>Subgroup ID</th>
                    <th>Subgroup Name</th>
                    <th>Master ID</th>
                  </tr>
                </thead>
                <tbody>
                  {subgroups.map((subgroup) => (
                    <tr key={subgroup.subgroup_id}>
                      <td>{subgroup.subgroup_id}</td>
                      <td>{subgroup.subgroup_name}</td>
                      <td>{subgroup.subgroup_mastergroup_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Group;
