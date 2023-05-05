import "../wardenComponent/LatestGatepasses/table.scss";
import React from "react";
import StudentNavbar from "../../Shared/NavbarTailWind/StudentNavbar";
import WardenSidebar from "../../Shared/SideBarTailWind/WardenSidebar";

const Approve_cancel = () => {
  return (
    <div>
      <div className="flex flex-col mt-20 mx-12">
        <div className="relative">
          <b>Sort By:</b>
          <select
            id="sort-by"
            name="sort-by"
            className="block appearance-none bg-gray-200 border  border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="approved">Approved</option>
            <option value="cancelled">Cancelled</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                      Gatepass Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Requested To
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <StudentNavbar />
      <WardenSidebar />
    </div>
  );
};

export default Approve_cancel;
