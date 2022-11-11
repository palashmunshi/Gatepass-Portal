import Navbar from "../../../Student/components/navbar/Navbar";
import "./home.scss";
import Widget from "../../../Student/components/widget/Widget";
import Featured from "../../../Student/components/featured/Featured";
import Chart from "../../../Student/components/chart/Chart";
import Table from "../../../Student/components/table/Table";
import Sidebar from "../../../Student/components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Latest Gatepasses</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;