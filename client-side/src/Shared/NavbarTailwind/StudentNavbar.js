import React from "react";

const StudentNavbar = () => {
  return (
    <div>
      <div className="shadow-md w-full fixed  top-0 left-0 bg-white">
        <div className="md:flex items-center justify-between px-4 bg-brown py-4 text-white font-bold">
          <div className="font-bold cursor-pointer flex items-center"></div>

          <div className="absolute right-8 top-3 cursor-pointer md:hidden">
            <ion-icon name="grid-outline"></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-11 text-red-800  absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-11 text-xl transition-all duration-500 ease-in`}
          >
            <li>Welcome People </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default StudentNavbar;
