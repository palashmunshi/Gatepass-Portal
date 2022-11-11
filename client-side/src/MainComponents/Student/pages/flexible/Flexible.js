import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './flexible.scss'

const Flexible = () => {
  return (
    <div className="info">
        <Sidebar />
        <div className="infoContainer">
            <Navbar />
            <div className="listContainer">
                <div className="listTitle">Apply Flexible Gatepass</div>
            </div>
        </div>
    </div>
  )
}

export default Flexible