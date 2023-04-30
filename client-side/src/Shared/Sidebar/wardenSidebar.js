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
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import { Link } from "react-router-dom";
//import { DarkModeContext } from "../../../../context/darkModeContext";
import { useContext } from "react";
import { InfoRounded, NotificationAdd } from "@mui/icons-material";
import logo from "../../assets/NU-logo.png";
import Cookies from "js-cookie";

const SidebarStudent = () => {
  const accessToken = Cookies.get("ACCESS_TOKEN");

  const logout = () => {
    fetch("http://localhost:4000/gatepass/v2/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ accessToken: accessToken }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));

    Cookies.remove("ACCESS_TOKEN");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/warden" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} height="70" weight="70" alt="logo.png" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/warden" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <Link to="/wardenprofile" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>My Profile</span>
            </li>
          </Link>
          <p className="title">Gatepass</p>
          <Link to="/leave" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Leave Gatepass</span>
            </li>
          </Link>
          <Link to="/wvisitor" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Visitor Gatepass</span>
            </li>
          </Link>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Autoapproved</span>
          </li>
          <p className="title">REPORTS</p>
          <Link to="/datewise" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Date-Wise</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Category-Wise</span>
          </li>
          <p className="title">OTHERS</p>
          <Link to="/winfo" style={{ textDecoration: "none" }}>
            <li>
              <InfoRounded className="icon" />
              <span>Info</span>
            </li>
          </Link>
          <Link onClick={logout} to="/" style={{ textDecoration: "none" }}>
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
