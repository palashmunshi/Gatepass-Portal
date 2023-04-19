import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Link } from "react-router-dom";

import { NotificationAdd } from "@mui/icons-material";
import logo from "../../assets/NU-logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/guard" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} height="70" weight="70" alt="logo.png" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/guard" style={{ textDecoration: "none" }}>
            <li>
              <div className="test">
                <DashboardIcon className="icon" />
                {/* <span>Dashboard</span> */}
                &nbsp;&nbsp;&nbsp;Dashboard
              </div>
            </li>
          </Link>
          <p className="title">OPTIONS</p>
          <Link to="/guard/biometric" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              {/* <span>Biometric</span> */}
              &nbsp;&nbsp;&nbsp;Biometric
            </li>
          </Link>
          <Link to="/guard/checkin" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsSharpIcon className="icon" />
              {/* <span>Check-In</span> */}
              &nbsp;&nbsp;&nbsp;Check In
            </li>
          </Link>
          <Link to="/guard/checkout" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsSharpIcon className="icon" />
              {/* <span>Check-Out</span> */}
              &nbsp;&nbsp;&nbsp;Check out
            </li>
          </Link>
          <Link to="/guard/VisitorCheckin" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddAlt1Icon className="icon" />
              {/* <span>Visitor Check-In</span> */}
              &nbsp;&nbsp;&nbsp;Visitor Check-In
            </li>
          </Link>
          <Link to="/guard/VisitorCheckout" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              {/* <span>Visitor Check-Out</span> */}
              &nbsp;&nbsp;&nbsp;Visitor Check-Out
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              {/* <span>Logout</span> */}
              &nbsp;&nbsp;&nbsp;Logout
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
