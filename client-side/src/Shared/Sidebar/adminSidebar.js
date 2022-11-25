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
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../../context/darkModeContext";
// import { useContext } from "react";
import { NotificationAdd } from "@mui/icons-material";
import "./sidebar.scss";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  //const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
        <span className="logo"><img src={logo} height="35" weight="35" alt="logo.png" />
           NU GATEPASS PORTAL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/changerole" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsSharpIcon className="icon" />
              <span>Change Role</span>
            </li>
          </Link>
          <Link to="/group" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Group/Subgroup</span>
          </li>
          </Link>
          <Link to="/parameter" style={{ textDecoration: "none" }}></Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Parameter Config</span>
          </li>
          <Link to="/profile" style={{ textDecoration: "none" }}></Link>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <p className="title">REPORT</p>
          <Link to="/sreport" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Student</span>
          </li>
          </Link>
          <Link to="/gtreport" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Gatepass Type</span>
          </li>
          </Link>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Defaulter</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Warden</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>BCH</span>
          </li>
          <p className="title">OTHERS</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Blacklist/Autoapprove Group</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Autoapproved</span>
          </li>
          <li>
            <NotificationAdd className="icon" />
            <span>Notification</span>
          </li>
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

export default Sidebar;
