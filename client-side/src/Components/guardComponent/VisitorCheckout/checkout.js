import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import GuardSidebar from "../../../Shared/Sidebar/guardSidebar";
import { CheckoutDetails } from "./checkoutDetails/checkoutDetails";

export const VisitorCheckout = () => {
  return (
    <div className="guard">
      <GuardSidebar />
      <div className="guardContainer">
        <Navbar />
        <CheckoutDetails />
      </div>
    </div>
  );
};
