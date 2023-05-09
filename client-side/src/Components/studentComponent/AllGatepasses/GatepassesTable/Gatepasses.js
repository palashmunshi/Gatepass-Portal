import React, { useEffect, useState } from "react";
import StudentNavbar from "../../../../Shared/NavbarTailWind/StudentNavbar";
import StudentSidebar from "../../../../Shared/SideBarTailWind/StudentSidebar";
import Cookies from "js-cookie";
import moment from "moment";

const Gatepasses = () => {
  const [gatepasses, setGatepasses] = useState([]);
  const accessToken = Cookies.get("ACCESS_TOKEN");

  useEffect(() => {
    fetch(
      "http://localhost:4000/gatepass/v2/student/get_all_student_gatepasses",
      {
        headers: {
          Authorization: accessToken,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setGatepasses(text);
      });
  }, []);

  return (

      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="table-auto min-w-full border text-left text-base font-light ">
            <thead className="border-b  bg-neutral-100 font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Gatepass Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Departure (Actual)
                </th>
                <th scope="col" className="px-6 py-3">
                  Arrival (Actual)
                </th>
                <th scope="col" className="px-6 py-3">
                  Requested to
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason to go
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {gatepasses.map((row) => (
                <tr
                  key={row.request_id}
                  className="rounded-full border-b transition duration-300 ease-in-out hover:bg-neutral-200 dark:border-neutral-500"
                >
                  <td className="whitespace-nowrap px-6 py-2 font-normal">
                    {row.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-normal">
                    {moment(row.from_date).utc().format("DD-MM-YYYY")} |{" "}
                    {moment(row.from_time).utc().format("hh:mm:ss A")}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-normal">
                    {moment(row.to_date).utc().format("DD-MM-YYYY")} |{" "}
                    {moment(row.to_time).utc().format("hh:mm:ss A")}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-normal">
                    {row.send_approval_to}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-normal">
                    {row.purpose}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-normal">
                    {row.status === "Approved" ? (
                      <span className="text-lime-500">{row.status}</span>
                    ) : row.status === "Rejected" ? (
                      <span className="text-red-500">{row.status}</span>
                    ) : row.status === "CHECKEDIN" ? (
                      <span className="text-lime-500 ">{row.status}</span>
                    ) : row.status === "CHECKEDOUT" ? (
                      <span className="text-lime-500 ">{row.status}</span>
                    ) : (
                        <span className="text-yellow-400 ">{row.status}</span> 
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-center">
                    <button
                      className="bg-[#1A85BD] hover:bg-sky-800 text-white font-bold py-2 px-4 border border-sky-800 rounded"
                      name={row.request_id}
                      //   onClick={handleClick}
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Gatepasses;
