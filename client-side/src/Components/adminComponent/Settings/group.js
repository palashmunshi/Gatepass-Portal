import React, { useState, useEffect } from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import "./group.scss";
import Cookies from "js-cookie";

export const Group = () => {
  const [groups, setGroups] = useState([]);
  const [subgroups, setSubgroups] = useState([]);
  const [showMoreGroup, setshowMoreGroup] = useState(false);
  const [showMoreGroupSubGroup, setshowMoreGroupSubGroup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const accessToken = Cookies.get("ACCESS_TOKEN");

  useEffect(() => {
    fetch("http://localhost:4000/gatepass/v2/admin/get_all_groups", {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setGroups(data))
      .catch((error) => console.log(error));

    fetch("http://localhost:4000/gatepass/v2/admin/get_all_sub_groups", {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => setSubgroups(data))
      .catch((error) => console.log(error));
  }, []);

  const handleshowMoreGroup = () => {
    setshowMoreGroup(true);
    setShowPopup(true);
  };

  const handleShowLess = () => {
    setshowMoreGroup(false);
  };

  const handleshowMoreGroupSubGroup = () => {
    setshowMoreGroupSubGroup(true);
  };

  const handleShowLess1 = () => {
    setshowMoreGroupSubGroup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
              <input
                type="text"
                placeholder="Make a new group"
                id="search1"
              ></input>
              <button id="add">+</button>
              <table className="table1">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Group Name</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  {groups
                    .slice(0, showMoreGroup ? groups.length : 10)
                    .map((group, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{group.gps_groupname}</td>
                        <td>
                          <button
                            className="modify"
                            onClick={() => alert("Under Construction!")}
                          >
                            Modify
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {groups.length > 10 && !showMoreGroup && (
                <p onClick={handleshowMoreGroup} className="eventShow">
                  Show More
                </p>
              )}
              {showMoreGroup && (
                <p onClick={handleShowLess} className="eventShow">
                  Show Less
                </p>
              )}
            </div>
          </div>
          <div className="GroupDesign">
            <div className="Align">
              <div id="heading">
                <h5>Add/Update SubGroups</h5>
              </div>
            </div>
            <div className="search3">
              <input
                type="text"
                placeholder="Make a new subgroup"
                id="search1"
              ></input>
              <button id="add">+</button>
              <table className="table1">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Subgroup Name</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  {subgroups
                    .slice(0, showMoreGroupSubGroup ? subgroups.length : 10)
                    .map((subgroup, index) => (
                      <tr key={subgroups.gps_groupid}>
                        <td>{index + 1}</td>
                        <td>{subgroup.subgroup_name}</td>
                        <td>
                          <button
                            className="modify"
                            onClick={() => alert("To be done!")}
                          >
                            Modify
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {subgroups.length > 10 && !showMoreGroupSubGroup && (
                <p onClick={handleshowMoreGroupSubGroup} className="eventShow">
                  Show More
                </p>
              )}
              {showMoreGroupSubGroup && (
                <p onClick={handleShowLess1} className="eventShow">
                  Show Less
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
