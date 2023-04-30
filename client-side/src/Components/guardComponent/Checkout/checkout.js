import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import GuardSidebar from "../../../Shared/Sidebar/guardSidebar";
import "./checkout.scss";
import { CheckoutDetails } from "./checkoutDetails/checkoutDetails";
import StudentSidebar from "../../../Shared/SideBarTailWind/StudentSidebar";

export const Checkout = () => {
  return (
    <div className="guard">
      <StudentSidebar />
      <div className="guardContainer">
     
        <CheckoutDetails />
      </div>
    </div>
  );
};
