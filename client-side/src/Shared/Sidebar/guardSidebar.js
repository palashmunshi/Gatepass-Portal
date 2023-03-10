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

import "./sidebar.scss";
import { NotificationAdd } from "@mui/icons-material";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/guard" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} height="35" weight="35" alt="logo.png" />
            NU GATEPASS PORTAL
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">OPTIONS</p>
          <Link to="/biometric" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Biometric</span>
            </li>
          </Link>
          <Link to="/manual" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsSharpIcon className="icon" />
              <span>Manual</span>
            </li>
          </Link>
          <Link to="/visitor" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Visitor</span>
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

export default Sidebar;
