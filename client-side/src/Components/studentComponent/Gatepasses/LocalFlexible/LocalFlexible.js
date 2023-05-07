import React, { useState } from "react";
import StudentNavbar from "../../../../Shared/NavbarTailWind/StudentNavbar";
import StudentSidebar from "../../../../Shared/SideBarTailWind/StudentSidebar";
import LFform from "./Form/LFform";

const LocalFlexible = () => {
  return (
    <div>
      <LFform />
      <StudentNavbar />
      <StudentSidebar />
    </div>
  );
};

export default LocalFlexible;
