import React, { useState } from "react";
import logo from "../../assets/NU-logo.png";
import { IonIcon } from '@ionic/react';
import { homeOutline, personOutline, checkmarkOutline, busOutline, airplaneOutline, alertOutline, banOutline, peopleOutline,informationOutline, logOutOutline } from 'ionicons/icons';

const WardenSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let Links = [
    { name: "My Dashboard", link: "/warden", icon: homeOutline },
    { name: "Others Dashboard", link: "/warden/other", icon: personOutline },
    { name: "Approved", link: "/warden/approved", icon: checkmarkOutline },
    { name: "Cancelled", link: "/warden/cancelled", icon: busOutline },
    { name: "Visitor", link: "/warden/visitor", icon: airplaneOutline },
    { name: "Emergency", link: "/warden/emergency", icon: alertOutline },
    { name: "Auto Approved", link: "/warden/autoapproved", icon: banOutline },
    { name: "Reports", link: "/warden/reports", icon: peopleOutline },
    { name: "Info", link: "/warden/info", icon: informationOutline },
    { name: "Logout", link: "/", icon: logOutOutline },
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

export default WardenSidebar;