import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./reportwidget.scss";
import axios from 'axios';

const ReportWidget = ({ type }) => {
  const status = ["Approved", "Expire", "Cancelled", "Rejected"];
  const defaultOption = status[0];
  const [Studentreport, setStudentreport] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [todate, settoDate] = useState("");

  // const HandleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(`The name you entered was: ${date}`);

  //   useEffect(() => {
  //     fetch(
  //       "http://192.168.9.230:4000/gatepass/v2/admin/tenure_wise_student_report/download/BT19GCS157/2019-09-01/2022-11-22"
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((text) => {
  //         setStudentreport(text);
  //       });
  //   });
  // };

  function downloadExcel(){

    axios.get('http://192.168.9.230:4000/gatepass/v2/admin/tenure_wise_student_report/download/BT19GCS157/2019-09-01/2022-11-22', {
      responseType: 'blob'
     }).then(response => {
        let headerLine = response.headers['content-disposition'];
        let startFileNameIndex = headerLine.indexOf('"') + 1
        let endFileNameIndex = headerLine.lastIndexOf('"')
        let filename = headerLine.substring(startFileNameIndex, endFileNameIndex)
        const url = window.URL.createObjectURL(new Blob([response.data], 
        {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
        const link = document.createElement('a');
     
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
     }).catch(error => {
        console.log(error)
     })
  }

  let data;

  switch (type) {
    case "student":
      data = {
        title: "TENURE-WISE",
        textinput: "Student Name",
      };
      break;
    case "stw":
      data = {
        title: "STATUS TENURE-WISE",
        textinput: "Student Name",
      };
      break;
    case "sw":
      data = {
        title: "STATUS-WISE",
        textinput: "Student Name",
      };
      break;
    case "gatepass":
        data = {
          title: "GATEPASS TYPE-BASED",
          textinput: "Student Name",
        };
        break;
    default:
      break;
  }

  return (
    <form onSubmit={downloadExcel}>
      <div className="reportwidget">
        <span className="title">{data.title}</span>
        {type === "sw"  || type==="gatepass" ? (
          <span>
            <Dropdown
              options={status}
              style={{ borderRadius: "20" }}
              // onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
          </span>
        ) : (
          // <span>
            <input
              className="e-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={data.textinput}
            />
          // </span>
        )}

        {type === "stw" ? (
          <span>
            <Dropdown
              options={status}
              style={{ borderRadius: "40" }}
              // onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
          </span>
        ) : (
          <></>
        )}
        <span>
          <span style={{ paddingRight: "20px" }}>From Date</span>
          <input className="e-input" type="date" placeholder={data.textinput} />
        </span>
        <span>
          <span style={{ paddingRight: "40px" }}>To Date</span>
          <input className="e-input" type="date" placeholder={data.textinput} />
        </span>
        <button
          type="submit"
          style={{ background: "brown", color: "#fff", borderRadius: "10px" }}
        >
          Download
        </button>
      </div>
    </form>
  );
};

export default ReportWidget;
