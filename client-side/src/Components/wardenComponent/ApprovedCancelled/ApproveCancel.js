import React, { useEffect, useState } from "react";
import StudentNavbar from "../../../Shared/NavbarTailWind/StudentNavbar";
import WardenSidebar from "../../../Shared/SideBarTailWind/WardenSidebar";
import Cookies from "js-cookie";
import moment from "moment";
import ModalRejected from "./ModalRejected";
import ModalApproved from "./ModalApproved";

const ApproveCancel = () => {
  const [gatepasses, setGatepasses] = useState([]);
  const [rejectedShowModal, setRejectedShowModal] = useState(false);
  const [acceptedShowModal, setAcceptedShowModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const accessToken = Cookies.get("ACCESS_TOKEN");

  useEffect(() => {
    fetch("http://localhost:4000/gatepass/v2/warden/get_all_gatepass", {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setGatepasses(text);
      });
  }, []);

  const handleClick = async (event) => {
    const request_id = event.target.name;
    const user_data = gatepasses.filter((obj) => {
      return obj.request_id == request_id;
    });
    setUserData(user_data);

    if (user_data[0].status == "Approved") {
      setAcceptedShowModal(true);
    } else {
      setRejectedShowModal(true);
    }
  };

  const handleSort = (event) => {
    const to_sort = event.target.value;
    setSearch(to_sort);
  

    const currentUsers = gatepasses.filter((obj) => {
      return obj.status.includes(to_sort);
    });

    setFilterData(currentUsers);
  };

  return (
    <div>
      <div className="flex flex-col mt-20 mx-12">
        <div className="relative py-3">
          <b>Sort By:</b>
          <select
            id="sort-by"
            name="sort-by"
            className="block appearance-none bg-gray-200 border  border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={handleSort}
          >
            <option value="Approved">Approved</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          {acceptedShowModal && (
            <ModalApproved
              setOpenModal={setAcceptedShowModal}
              data={userData}
            />
          )}
          {rejectedShowModal && (
            <ModalRejected
              setOpenModal={setRejectedShowModal}
              data={userData}
            />
          )}
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
                  {search.length > 1
                    ? filterData.map((row) => (
                        <tr
                          key={row.request_id}
                          className="rounded-full border-b transition duration-300 ease-in-out hover:bg-neutral-200 dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.user_id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.gps_groupname}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.gatepass_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.status === "Approved" ? (
                              <span className="text-lime-500">
                                {row.status}
                              </span>
                            ) : row.status === "Rejected" ? (
                              <span className="text-red-500">{row.status}</span>
                            ) : (
                              <span className="text-yellow-400 ">
                                {row.status}
                              </span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {moment(row.approved_or_rejected_date)
                              .utc()
                              .format("DD-MM-YYYY")}{" "}
                            |{" "}
                            {moment(row.approved_or_rejected_time)
                              .utc()
                              .format("hh:mm:ss A")}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 text-center">
                            <button
                              className="bg-[#1A85BD] hover:bg-sky-800 text-white font-bold py-2 px-4 border border-sky-800 rounded"
                              name={row.request_id}
                              onClick={handleClick}
                            >
                              Open
                            </button>
                          </td>
                        </tr>
                      ))
                    : gatepasses.map((row) => (
                        <tr
                          key={row.request_id}
                          className="rounded-full border-b transition duration-300 ease-in-out hover:bg-neutral-200 dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.user_id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.gps_groupname}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.gatepass_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {row.status === "Approved" ? (
                              <span className="text-lime-500">
                                {row.status}
                              </span>
                            ) : row.status === "Rejected" ? (
                              <span className="text-red-500">{row.status}</span>
                            ) : (
                              <span className="text-yellow-400 ">
                                {row.status}
                              </span>
                            )}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 font-medium">
                            {moment(row.approved_or_rejected_date)
                              .utc()
                              .format("DD-MM-YYYY")}{" "}
                            |{" "}
                            {moment(row.approved_or_rejected_time)
                              .utc()
                              .format("hh:mm:ss A")}
                          </td>
                          <td className="whitespace-nowrap px-6 py-2 text-center">
                            <button
                              className="bg-[#1A85BD] hover:bg-sky-800 text-white font-bold py-2 px-4 border border-sky-800 rounded"
                              name={row.request_id}
                              onClick={handleClick}
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
        </div>
      </div>
      <StudentNavbar />
      <WardenSidebar />
    </div>
  );
};

export default ApproveCancel;
