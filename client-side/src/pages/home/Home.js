import Sidebar from "../../SharedComponents/components/sidebar/Sidebar";
import Navbar from "../../SharedComponents/components/navbar/Navbar";
import "./home.scss";
import Widget from "../../SharedComponents/components/widget/Widget";
import Featured from "../../SharedComponents/components/featured/Featured";
import Chart from "../../SharedComponents/components/chart/Chart";
import Table from "../../SharedComponents/components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="oncampus" />
          <Widget type="outstation" />
          <Widget type="defaulter" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">Latest Gatepasses</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;