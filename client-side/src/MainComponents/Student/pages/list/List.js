import "./list.scss"
import Sidebar from "../../../Student/components/sidebar/Sidebar"
import Navbar from "../../../Student/components/navbar/Navbar";
import Datatable from "../../../Student/components/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List