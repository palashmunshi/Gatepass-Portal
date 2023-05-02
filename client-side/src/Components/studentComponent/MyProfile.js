import React from "react";
import StudentSidebar from "../../Shared/SideBarTailWind/StudentSidebar";
import StudentNavbar from "../../Shared/NavbarTailwind/StudentNavbar";
import { IonIcon } from "@ionic/react";
import { personCircle } from "ionicons/icons";

const StudentProfile = () => {
  return (
    <div>
      <div>
        <StudentNavbar />
      </div>
      <div className="mt-20">
        <div className="flex flex-wrap">
          {/* Left Side */}
          <div className="flex-auto w-70 ">
            <div className="p-10 flex flex-col justify-start items-center">
              {/* Profile Photo */}
              <div className=" bg-white rounded-full flex items-center justify-center mb-5">
                <IonIcon
                  icon={personCircle}
                  className="w-60 h-60 text-gray-500"
                />
              </div>
              {/* Upload Button */}
              <div className="w-full text-center">
                <button className="bg-red-700 text-white w-40 px-4 py-2 rounded hover:bg-red-900 mb-3">
                  Upload Photo
                </button>
              </div>
              {/* Request Button */}
              <div className="w-full text-center">
                <button className="bg-green-500 text-white w-40 px-4 py-2 rounded hover:bg-green-600">
                  Request Profile Update
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-auto w-70 ">
            <div className="p-10 mt-10">
              <div>
                <h1 className="text-2xl font-bold">Perosonal Infromation</h1>
                <p className="text-gray-500 text-xl mt-6">
                  <b>Building:</b> UG-2 Phase-2,
                  <p className="mt-5">
                    <b>Hostel: </b> 1234
                  </p>
                  <p className="mt-5">
                    <b>Email: </b> Kahitoz@gmail.com
                  </p>
                  <p className="mt-5">
                    <b>Enrollment Number: </b>BT20HCS189
                  </p>
                  <p className="mt-5">
                    <b>Parent's Phone Number: </b> 123456789
                  </p>
                  <p className="mt-5">
                    <b>Student's Phone Number: </b> 123456789
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StudentSidebar />
    </div>
  );
};
export default StudentProfile;
