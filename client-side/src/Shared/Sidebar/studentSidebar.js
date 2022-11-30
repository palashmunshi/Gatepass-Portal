import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import { Link } from "react-router-dom";
//import { DarkModeContext } from "../../../../context/darkModeContext";
import { useContext } from "react";
import { InfoRounded, NotificationAdd } from "@mui/icons-material";

const SidebarStudent = () => {
//   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/student" style={{ textDecoration: "none" }}>
          <span className="logo">NU GATEPASS PORTAL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/student" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <Link to="/myprofile" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>My Profile</span>
            </li>
          </Link>          
          <p className="title">Gatepass</p>
          <Link to="/localfixed" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Local Fixed</span>
          </li>
          </Link>
          <Link to="/flexible" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Local Flexible</span>
            </li>
          </Link>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Outstation</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Emergency</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Non-Returnable</span>
          </li>
          <p className="title">Visitor</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Apply Gatepass</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Check Request</span>
          </li>
          <p className="title">OTHERS</p>
          <Link to="/student/info" style={{ textDecoration: "none" }}>
            <li>
              <InfoRounded className="icon" />
              <span>Info</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
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

export default SidebarStudent;