import "./single.scss";
import Sidebar from "../../../Student/components/sidebar/Sidebar";
import Navbar from "../../../Student/components/navbar/Navbar";
import Chart from "../../../Student/components/chart/Chart";
import List from "../../../Student/components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Palak Sahu</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">palak.shau19@st.niituniversity.in</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">1234566789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Enrollment Id:</span>
                  <span className="itemValue">BT19GCS008</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Batch:</span>
                  <span className="itemValue">B.Tech 19</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Hostel:</span>
                  <span className="itemValue">PG2</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    XYZ Address
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="Last Gatepasses Applied" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Single;