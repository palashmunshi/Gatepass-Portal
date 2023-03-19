import React, { useState } from "react";
import PropTypes from "prop-types";


const GSPopup = ({ title, onSubmit, onClose }) => {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(groupName);
  };

  const handleClose = () => {
    setGroupName("");
    onClose();
  };

  return (
    <div className="gspopup-container">
      <div className="gspopup">
        <div className="gspopup-header">
          <h3>{title}</h3>
          <button onClick={handleClose}>&times;</button>
        </div>
        <div className="gspopup-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

GSPopup.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GSPopup;
