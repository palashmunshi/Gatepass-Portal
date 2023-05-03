import React, { useState } from "react";
import logo from "../../assets/NU-logo.png";
import { IonIcon } from '@ionic/react';
import { homeOutline, personOutline, carOutline, busOutline, airplaneOutline, alertOutline, banOutline, peopleOutline, addOutline, informationOutline, logOutOutline } from 'ionicons/icons';
import Cookies from "js-cookie";

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

  let Links = [
    { name: "Dashboard", link: "/student", icon: homeOutline },
    { name: "My Profile", link: "/student/profile", icon: personOutline },
    { name: "Local Fixed Gatepass", link: "/student/localfixed", icon: carOutline },
    { name: "Local Flexible Gatepass", link: "/student/flexible", icon: busOutline },
    { name: "Outstation", link: "/student/outstation", icon: airplaneOutline },
    { name: "Emergency", link: "/student/emergency", icon: alertOutline },
    { name: "Non-Returnable", link: "/student/nonreturnable", icon: banOutline },
    { name: "Visitor-Gatepass", link: "/student/vgatepass", icon: peopleOutline },
    { name: "Visitor-Request", link: "/student/vrequest", icon: addOutline },
    { name: "Info", link: "/student/info", icon: informationOutline },
    { name: "Logout", link: "/", icon: logOutOutline, onClick: logout },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar fixed top-0 bottom-0  pr-10 w-[300px] overflow-y-auto text-center bg-brown transition-all duration-300 ${
        isOpen ? "left-0" : "left-[-260px]"
      }`}
    >
      <div className="text-white text-xl">
        <div
          className="text-3xl absolute right-1 top-3 cursor-pointer"
          onClick={toggleSidebar}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </div>
        <div className={`p-2.5 mt-1 flex items-center ${isOpen ? "block" : "hidden"}`}>
  <img src={logo} height="60"weight="50" alt="logo.png" />
</div>

        <hr className={`my-4 text-white ${isOpen ? "block" : "hidden"}`}></hr>
      </div>
      <div className="text-white ">
        <ul>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-5 my-3">
              <a
                href={link.link}
                className="text-brown hover:text-brown-100 duration-200"
                onClick={toggleSidebar}
              >
                <IonIcon
                  icon={link.icon}
                  className="w-6 h-6 mr-3 inline-block"
                />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentSidebar;