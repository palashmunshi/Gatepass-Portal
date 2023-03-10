import React from "react";
import Navbar from "../../Shared/Navbar/navbar";
import GuardSidebar from "../../Shared/Sidebar/guardSidebar";

export const Guard = () => {
  return (
    <div className="admin">
      <GuardSidebar />
      <div className="adminContainer">
        <Navbar />
      </div>
    </div>
  );
};
