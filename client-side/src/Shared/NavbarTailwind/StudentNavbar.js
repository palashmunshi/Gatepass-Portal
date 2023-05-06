import React from "react";

const StudentNavbar = () => {
    return(
        <div>
           <div className="shadow-md w-full fixed top-0 left-0 bg-white">
            <div className = "md:flex items-center justify-between px-4 bg-brown py-4 text-white font-bold">
                <div className="font-bold text-white px-7 text-xl cursor-pointer flex items-center  hover:text-gray-400 duration-200">
                
                </div>

                <div className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
                <ion-icon name="grid-outline"></ion-icon>
              
                </div>
                
                      <ul className={`md:flex md:items-center md:pb-0 pb-12 text-red-800 text-3xl absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-11 transition-all duration-500 ease-in`}>
                        <li>Welcome Student</li>
                   
                </ul>
               
            </div>
           </div>
        </div>

    );
}
export default StudentNavbar