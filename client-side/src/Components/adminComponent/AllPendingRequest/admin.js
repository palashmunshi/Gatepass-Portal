import { Route, Router, Routes} from "react-router-dom";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";


function Admin() {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route exact path="/admin" component={Dashboard} />
       
        <Redirect to="/admin" />
      </Switch>
    </div>
  );
}

export default Admin;
