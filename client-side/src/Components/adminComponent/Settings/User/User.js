import React, { useState, useEffect } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import Sidebar from "../../../../Shared/Sidebar/adminSidebar";
import "../../admin.scss";
import axios from "axios";
import "./User.scss";

export const User = () => {
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:4000/gatepass/v2//admin/get_all_users"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 20);
    setShowMore(true);
  };

  const handleShowLess = () => {
    setDisplayCount(displayCount - 20);
    setShowMore(false);
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div>
          //Search Function 
          <div className="ContentShaper">
            <div className="TableShaper">
              <table className="table1">
                <thead>
                  <tr>
                    <th>S.No</th>
                  
                    <th>Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, displayCount).map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div id="buttonhandler">
                <p onClick={handleShowMore} className="buttonCSS">
                  Show more
                </p>
                <p onClick={handleShowLess} id="showless" className="buttonCSS">
                  Show less
                </p>
              </div>
            </div>
            <div className="AddDetails">
              <div className="BulkUpload">
               <h5>Bulk Upload</h5>
                <form action="" method="post">

                  <div className="handleBulkUpload"><label className="label">Select a role</label>
                  <select name="role">
                    <option value="" disabled="" selected="" className="option">
                      Please select one
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                  </select>
                  
                  <label className="label">Select A Group</label>
                  <select name="role">
                    <option value="" disabled="" selected="" className="option">
                      Please select one
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                  </select>

                  <label className="label">Select a subgroup</label>
                  <select name="role">
                    <option value="" disabled="" selected="" className="option">
                      Please select one
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                  </select>
                  </div>
                  <button className="button">Upload</button>

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
