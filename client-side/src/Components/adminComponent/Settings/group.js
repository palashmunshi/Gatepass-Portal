import React, { useState, useEffect } from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import Sidebar from "../../../Shared/Sidebar/adminSidebar";
import "./group.scss";

export const Group = () => {
  const [groups, setGroups] = useState([]);
  const [subgroups, setSubgroups] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleShowMore = () => {
    setShowMore(true);
    setShowPopup(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const handleShowMore1 = () => {
    setShowMore1(true);
  };

  const handleShowLess1 = () => {
    setShowMore1(false);
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
                    .slice(0, showMore ? groups.length : 10)
                    .map((group, index) => (
                      <tr key={group.gps_groupid}>
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
              {groups.length > 10 && !showMore && (
                <p onClick={handleShowMore} className="eventShow">
                  Show More
                </p>
              )}
              {showMore && (
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
                    .slice(0, showMore1 ? subgroups.length : 10)
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
              {subgroups.length > 10 && !showMore1 && (
                <p onClick={handleShowMore1} className="eventShow">
                  Show More
                </p>
              )}
              {showMore1 && (
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
