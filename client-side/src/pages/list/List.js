import "./list.scss"
import Sidebar from "../../SharedComponents/components/sidebar/Sidebar"
import Navbar from "../../SharedComponents/components/navbar/Navbar"
import Datatable from "../../SharedComponents/components/datatable/Datatable"

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