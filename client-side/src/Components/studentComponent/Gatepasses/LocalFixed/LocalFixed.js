import React from 'react'
import Navbar from '../../../../Shared/Navbar/navbar';
import SidebarStudent from '../../../../Shared/Sidebar/studentSidebar';
import LFform from './Form/LFform';
import './localfixed.scss'


export const LocalFixed = () => {
    return (
        <div className="admin">
          <SidebarStudent />
          <div className="adminContainer">
            <Navbar /> 
            <div className="listContainer">
              <div className="listTitle">Local Fixed Gatepass</div>
              <div className='link'>You have two gatepasses left on autoapproval</div>
              <LFform />
                      
            </div>
          </div>
        </div>
      );
}