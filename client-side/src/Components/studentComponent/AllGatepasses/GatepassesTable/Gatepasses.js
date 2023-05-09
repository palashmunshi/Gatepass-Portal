import React, { useEffect, useState } from "react";
import StudentNavbar from "../../../../Shared/NavbarTailWind/StudentNavbar";
import StudentSidebar from "../../../../Shared/SideBarTailWind/StudentSidebar";
import Cookies from "js-cookie";
import moment from "moment";

const Gatepasses = () => {

  return (
    <div>
        
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-left text-base font-light ">
                <thead className="border-b  bg-neutral-100 font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Enrollment ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Batch
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Gatepass Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status Date | Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
      </div>
    </div>
  );
};

export default Gatepasses;
