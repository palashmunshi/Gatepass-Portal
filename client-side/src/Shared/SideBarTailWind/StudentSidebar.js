import React, { useState } from "react";
import logo from "../../assets/NU-logo.png";
import { IonIcon } from "@ionic/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const accessToken = Cookies.get("ACCESS_TOKEN");

  const logout = () => {
    fetch("http://localhost:4000/gatepass/v2/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ accessToken: accessToken }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));

    Cookies.remove("ACCESS_TOKEN");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`sidebar fixed top-0 bottom-0  pr-10  overflow-y-auto text-center bg-brown transition-all duration-300 whitespace-nowrap overflow-x-hidden ${
        isOpen ? "w-[300px]" : "w-[45px]"
      }`}
    >
      <div className="text-white text-xl">
        <div className={`p-2.5 mt-1 flex items-center`}>
          <img src={logo} height="60" weight="50" alt="logo.png" />
        </div>

        <hr className={`my-2 text-white`}></hr>
        <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm items-start">
          {/* <div className="pl-4 text-white text-xs text-[11px] uppercase">
            Main
          </div> */}
          <Link
            to="/student"
            className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1"
          >
            <div className="w-full flex items-center gap-x-1.5 group select-none text-white text-base ">
              <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0  bg-white transition-all duration-300"></div>
              </div>
              <div className="group-hover:bg-white  w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
                <DashboardIcon />
                {/* <svg
                  className="h-5 w-5 group-hover:fill-[#85151C] dark:fill-white transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M19 2H9c-1.11 0-2 .89-2 2v5.586l-4.707 4.7v0c-.4.39-.4 1.02 0 1.41 .18.18.44.29.7.29v5 0c0 .55.44 1 1 1h16v0c.55 0 1-.45 1-1v-17c0-1.11-.9-2-2-2Zm-8 18H5v-5.586l3-3 3 3V20Zm8 0h-6v-4 0c.55 0 .99-.45 1-1 0-.27-.11-.53-.3-.72L8.99 9.57V3.984h10v16Z"></path>
                    <path d="M11 6h2v2h-2Zm4 0h2v2h-2Zm0 4.03h2v1.96h-2Zm0 3.96h2v2h-2Zm-8 1h2v2H7Z"></path>
                  </g>
                </svg> */}
                <span className="text-base">Dashboard</span>
              </div>
            </div>
          </Link>
          {/* <div className="pl-4 text-white text-xs text-[11px] uppercase">
            Settings
          </div> */}
          <Link
            to="/student/profile"
            className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1"
          >
            <div className="w-full flex items-center gap-x-1.5 group select-none text-white ">
              <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
              </div>
              <div
                className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm"
                href="/student/profile"
              >
                <AccountCircleIcon />
                <span className="text-base">My Profile</span>
              </div>
            </div>
          </Link>
          {/* <div className="pl-4 text-white text-xs text-[11px] uppercase">
            Gatepass
          </div> */}
          <Link
            to="/student/localfixed"
            className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1"
          >
            <div className="w-full flex items-center gap-x-1.5 group select-none text-white">
              <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
              </div>
              <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
                <AccountCircleIcon />

                <span className="text-base">Local Fixed</span>
              </div>
            </div>
          </Link>
          <div className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1">
            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
            </div>
            <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
              <AccountCircleIcon />

              <span className="text-base">Local Flexible</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1">
            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
            </div>
            <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
              <AccountCircleIcon />

              <span className="text-base">Outstation</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1">
            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
            </div>
            <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
              <AccountCircleIcon />
              <span className="text-base">Emergency</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1">
            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
            </div>
            <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
              <AccountCircleIcon />
              <span className="text-base">Non-Returnable</span>
            </div>
          </div>
          {/* <div className="pl-4 text-white text-xs text-[11px] uppercase">
            Visitor
          </div> */}
          <div className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1">
            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
            </div>
            <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
              <AccountCircleIcon />

              <span className="text-base">Apply Gatepass soon</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1">
            <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
            </div>
            <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
              <AccountCircleIcon />

              <span className="text-base">Check Request</span>
            </div>
          </div>
          {/* <div className="pl-4 text-white text-xs text-[11px] uppercase">
            Others
          </div> */}
          <Link
            to="/student/info"
            className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1"
          >
            <div className="w-full flex items-center gap-x-1.5 group select-none text-white">
              <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
              </div>
              <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
                <AccountCircleIcon />
                <span className="text-base">Info</span>
              </div>
            </div>
          </Link>
          <Link
            to="/"
            className="w-full flex items-center gap-x-1.5 group select-none text-white pb-1"
            onClick={logout}
          >
            <div className="w-full flex items-center gap-x-1.5 group select-none text-white">
              <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-white transition-all duration-300"></div>
              </div>
              <div className="group-hover:bg-white w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-[#85151C] dark:hover:text-[#85151C] text-sm">
                <AccountCircleIcon />

                <span className="text-base">Logout</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentSidebar;
