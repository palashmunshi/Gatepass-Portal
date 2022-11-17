import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import CommuteSharpIcon from '@mui/icons-material/CommuteSharp';
import NotInterestedSharpIcon from '@mui/icons-material/NotInterestedSharp';
import { PlusOneRounded } from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        amount: "500",
        link: "All users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "oncampus":
      data = {
        title: "ONCAMPUS",
        amount: "378",
        link: "Student in campus",
        icon: (
          <SchoolSharpIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "outstation":
      data = {
        title: "OUTSTATION",
        amount: "120",
        link: "Student out of campus",
        icon: (
          <CommuteSharpIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "defaulter":
      data = {
        title: "DEFAULTER",
        amount: "2",
        link: "Defaulter students",
        icon: (
          <NotInterestedSharpIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <PlusOneRounded />
          {5}
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;