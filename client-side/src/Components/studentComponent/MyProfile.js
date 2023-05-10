import React from "react";
import StudentSidebar from "../../Shared/SideBarTailWind/StudentSidebar";
import StudentNavbar from "../../Shared/NavbarTailWind/StudentNavbar";
import { IonIcon } from "@ionic/react";
import { personCircle } from "ionicons/icons";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const StudentProfile = () => {
  const accessToken = Cookies.get("ACCESS_TOKEN");
  const decoded = jwt_decode(accessToken);

  const email = decoded.data.email_id;
  const hostel = decoded.data.hostel;
  const building = decoded.data.hostel_tower;
  const student_contact = decoded.data.contact_number;
  const Enrollment = decoded.data.user_id;


  return (
    <div>
      <div></div>
      <div className="mt-20 -z-1">
        <div className="flex flex-wrap">
          {/* Left Side */}
          <div className="flex-auto w-70 bg-white drop-shadow-2xl rounded-lg mx-24 my-10">
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
            <div className="p-10 mt-10 ml-20">
              <div>
                <h1 className="text-2xl font-bold">Personal Information</h1>
                <p className="text-gray-500 text-xl mt-6">
                  <b>Building:</b> {building}
                  <p className="mt-5">
                    <b>Hostel: </b> {hostel}
                  </p>
                  <p className="mt-5">
                    <b>Email: </b> {email}
                  </p>
                  <p className="mt-5">
                    <b>Enrollment Number: </b>{Enrollment}
                  </p>
                  <p className="mt-5">
                    <b>Parent's Phone Number: </b> 
                  </p>
                  <p className="mt-5">
                    <b>Student's Phone Number: </b> {student_contact}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StudentNavbar />
      <StudentSidebar />
    </div>
  );
};
export default StudentProfile;
