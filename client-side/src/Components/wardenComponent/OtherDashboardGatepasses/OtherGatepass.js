import "../LatestGatepasses/table.scss";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import moment from "moment";
import Modal from "./Modal";

const OtherGatepass = () => {
  const [otherGP, setOtherGP] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState([]);
  const accessToken = Cookies.get("ACCESS_TOKEN");

  useEffect(() => {
    fetch("http://localhost:4000/gatepass/v2/warden/get_dashboard_others", {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setOtherGP(text);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {showModal && <Modal setOpenModal={setShowModal} data={userData} />}
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
                    Applied Date | Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {otherGP.map((row) => (
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
                      {row.gatepass_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      {row.Requested_to}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 font-medium">
                      {moment(row.applied_date).utc().format("DD-MM-YYYY")} |{" "}
                      {moment(row.applied_time).utc().format("hh:mm:ss A")}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2 text-center">
                      <button
                        className="bg-[#1A85BD] hover:bg-sky-800 text-white font-bold py-2 px-4 border border-sky-800 rounded"
                        name={row.request_id}
                        onClick={() => {
                          setShowModal(true);
                          setUserData(
                            otherGP.filter((obj) => {
                              return obj.request_id == row.request_id;
                            })
                          );
                        }}
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
  );
};

export default OtherGatepass;
