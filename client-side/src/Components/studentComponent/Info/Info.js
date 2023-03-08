import SidebarStudent from '../../../Shared/Sidebar/studentSidebar';
import React from 'react'
import Navbar from '../../../Shared/Navbar/navbar';
import './info.scss';

const Info = () => {
    return (
      <div className="info">
          <SidebarStudent />
          <div className="infoContainer">
              <Navbar />
              <div className="listContainer">
                  <div className="listTitle">Guidelines</div>
                  <div className="top">
                  1: Keep your ID Card with you with proper sling before checkout and checkin.
                  <br/>
                  2: Please don't invlove with any unknown person outside campus for your safety, be in crowd of friends and continuly in touch with your friends, wardens, chief-wardens.
                  <br/>
                  3: Call for Rickshaw/Auto/Cabs only those who are registered with NU, and all contact details are available at campus reception.
                  <br/>
                  4: Narcotic products are strictly prohibitate inside campus, if found your involvement by any mean or manner with any narcotic related things you will be accounted as guilty.
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Info