import React from "react";
import Navbar from "../../../Shared/Navbar/navbar";
import GuardSidebar from "../../../Shared/Sidebar/guardSidebar";
import "./checkout.scss";
import { CheckoutDetails } from "./checkoutDetails/checkoutDetails";

export const Checkout = () => {
  return (
    <div className="admin">
      <GuardSidebar />
      <div className="adminContainer">
        <Navbar />
        <CheckoutDetails />
      </div>
    </div>
  );
};
