import React, { useState, useEffect } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import Sidebar from "../../../../Shared/Sidebar/adminSidebar";
import "../../admin.scss";
import axios from "axios";
import "./User.scss";
import ReactModal from "react-modal";
import Dropdown from "react-dropdown";

export const User = () => {
  const [data, setData] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);
  const [showMore, setShowMore] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [modal, setModal] = useState(false);

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

  const handleChange = (event) => {
    event.preventDefault();
    const search = event.target.value;

    setSearch(search);
    if (search.length > 0) {
      const currentUsers = data.filter((obj) => {
        return obj.name.toLowerCase().includes(search.toLowerCase());
      });
      setFilterData(currentUsers);
    } else {
      setFilterData(data);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="admin">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div>
          <input
            type="text"
            placeholder="Search Name"
            onChange={handleChange}
            id="searchbar"
          />
          <ReactModal
            className="Modal"
            overlayClassName="Overlay"
            isOpen={modal}
            contentLabel="Example Modal"
            onRequestClose={() => setModal(false)}
            // style={(className = "modalContainer")}
          >
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <br />
              <label>
                Enrollment Number:
                <input type="text" name="user_id" />
              </label>
              <br />
              <label>
                Email ID:
                <input type="text" name="email" />
              </label>
              <br />
              <label>
                Role: <Dropdown placeholder="-Role-" />
              </label>
              <br />
              <label>
                Group Setting: <Dropdown option="No role" />
              </label>
              <br />
              <label>
                Hostel:
                <input type="text" name="email" />
              </label>
              <br />
              <label>
                Room Number:
                <input type="text" name="email" />
              </label>
              <br />
              <label>
                Contact Number:
                <input type="text" name="email" />
              </label>
              <br />
              <label>
                Parents Contact Number:
                <input type="text" name="email" />
              </label>
            </form>
            <div>Login/Signup</div>
            <button onClick={() => setModal(false)} className="align">
              X
            </button>
          </ReactModal>
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
                  {search.length > 1
                    ? filterData.slice(0, displayCount).map((user, index) => (
                        <tr key={index} onClick={() => setModal(true)}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.status}</td>
                        </tr>
                      ))
                    : data.slice(0, displayCount).map((user, index) => (
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
                  <div className="handleBulkUpload">
                    <label className="label">Select a role</label>
                    <select name="role" defaultValue="">
                      <option disabled="" className="option">
                        Please select one
                      </option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="guest">Guest</option>
                    </select>

                    <label className="label">Select A Group</label>
                    <select name="role" defaultValue="">
                      <option disabled="" className="option">
                        Please select one
                      </option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="guest">Guest</option>
                    </select>

                    <label className="label">Select a subgroup</label>
                    <select name="role" defaultValue="">
                      <option disabled="" className="option">
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
