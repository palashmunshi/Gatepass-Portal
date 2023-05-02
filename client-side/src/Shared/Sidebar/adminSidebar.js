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
// import logo from "../../assets/logo.png";
import logo from "../../assets/NU-logo.png";
import Cookies from "js-cookie";

const Sidebar = () => {
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
  //const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img src={logo} height="70" weight="70" alt="logo.png" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              {/* <span>Dashboard</span>   */}
              &nbsp;&nbsp;&nbsp;Dashboard
            </li>
          </Link>
          <p className="title">SETTINGS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              {/* <span>Users</span> */}
              &nbsp;&nbsp;&nbsp;Users
            </li>
          </Link>
          <Link to="/changerole" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsSharpIcon className="icon" />
              {/* <span>Change Role</span> */}
              &nbsp;&nbsp;&nbsp;Change Roles
            </li>
          </Link>
          <Link to="/group" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              {/* <span>Group/Subgroup</span> */}
              &nbsp;&nbsp;&nbsp;Group/Subgroup
            </li>
          </Link>
          <Link to="/parameter" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              {/* <span>Parameter Config</span> */}
              &nbsp;&nbsp;&nbsp;Parameter Config
            </li>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}></Link>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            {/* <span>Profile</span> */}
            &nbsp;&nbsp;&nbsp;Profile
          </li>
          <p className="title">REPORT</p>
          <Link to="/sreport" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              {/* <span>Student</span> */}
              &nbsp;&nbsp;&nbsp;Student
            </li>
          </Link>
          <Link to="/gtreport" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsNoneIcon className="icon" />
              {/* <span>Gatepass Type</span> */}
              &nbsp;&nbsp;&nbsp;Gatepass Type
            </li>
          </Link>
          <Link to="/dreport" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              {/* <span>Defaulter</span> */}
              &nbsp;&nbsp;&nbsp;Defaulter
            </li>
          </Link>
          <Link to="/wreport" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              {/* <span>Warden</span> */}
              &nbsp;&nbsp;&nbsp;Warden
            </li>
          </Link>
          <Link to="/bchreport" style={{ textDecoration: "none" }}>
            <li>
              <SettingsApplicationsIcon className="icon" />
              {/* <span>BCH</span> */}
              &nbsp;&nbsp;&nbsp;BCH
            </li>
          </Link>
          <p className="title">OTHERS</p>
          <li>
            <ExitToAppIcon className="icon" />
            {/* <span>Blacklist/Autoapprove Group</span> */}
            &nbsp;&nbsp;&nbsp;Blacklisted
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            {/* <span>Autoapproved</span> */}
            &nbsp;&nbsp;&nbsp;Autoapproved
          </li>
          <li>
            <NotificationAdd className="icon" />
            {/* <span>Notification</span> */}
            &nbsp;&nbsp;&nbsp;Notification
          </li>
          <Link onClick={logout} to="/" style={{ textDecoration: "none" }}>
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
