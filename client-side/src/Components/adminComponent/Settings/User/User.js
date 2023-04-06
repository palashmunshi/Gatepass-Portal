import React, { useState, useEffect } from "react";
import Navbar from "../../../../Shared/Navbar/navbar";
import Sidebar from "../../../../Shared/Sidebar/adminSidebar";
import "../../admin.scss";
import axios from "axios";
import "./User.scss";
import ReactModal from "react-modal";
import Dropdown from "react-dropdown";
import "./Dialog.scss";

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
            <div class="title">Edit User</div>

            <form>
              <div class="container">
                <div class="column left-column">
                  <label for="name" id="name-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    aria-labelledby="name-label"
                  ></input>
                  <label for="user_id" id="user-id-label">
                    Enrollment Number:
                  </label>
                  <input
                    type="text"
                    id="user_id"
                    name="user_id"
                    aria-labelledby="user-id-label"
                  ></input>
                  <label for="email" id="email-label">
                    Email ID:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    aria-labelledby="email-label"
                  ></input>
                  <label for="role" id="role-label">
                    Role:
                  </label>
                  <select id="role" name="role" aria-labelledby="role-label">
                    <option value="">-Role-</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
                <div class="column right-column">
                  <label for="group_setting" id="group-setting-label">
                    Group Setting:
                  </label>
                  <select
                    id="group_setting"
                    name="group_setting"
                    aria-labelledby="group-setting-label"
                  >
                    <option value="no_role">No Role</option>
                  </select>
                  <label for="subgroup_setting" id="subgroup-setting-label">
                    Subgroup Setting:
                  </label>
                  <select
                    id="subgroup_setting"
                    name="subgroup_setting"
                    aria-labelledby="subgroup-setting-label"
                  >
                    <option value="no_role">No Role</option>
                  </select>
                  <label for="hostel" id="hostel-label">
                    Hostel:
                  </label>
                  <input
                    type="text"
                    id="hostel"
                    name="hostel"
                    aria-labelledby="hostel-label"
                  ></input>
                  <label for="room_number" id="room-number-label">
                    Room Number:
                  </label>
                  <input
                    type="text"
                    id="room_number"
                    name="room_number"
                    aria-labelledby="room-number-label"
                  ></input>
                  <label for="contact_number" id="contact-number-label">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    id="contact_number"
                    name="contact_number"
                    aria-labelledby="contact-number-label"
                  ></input>
                  <label
                    for="parents_contact_number"
                    id="parents-contact-number-label"
                  >
                    Parents Contact Number:
                  </label>
                  <input
                    type="text"
                    id="parents_contact_number"
                    name="parents_contact_number"
                    aria-labelledby="parents-contact-number-label"
                  ></input>
                </div>
              </div>
              <button
                type="submit"
                id="update-button"
                onClick={() => setModal(false)}
              >
                Update User
              </button>
            </form>
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
