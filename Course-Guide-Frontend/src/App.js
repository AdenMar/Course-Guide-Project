import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import {
  StudentHomePage,
  AdvisorHomePage,
  CourseListPage,
  AdviseePage,
  LogOut,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LogOut} />
        <Route exact path="/CourseList" component={CourseListPage} />
        <Route exact path="/logout" component={LogOut} />
        <Route exact path="/studentHome" component={StudentHomePage} />
        <Route exact path="/advisorHome" component={AdvisorHomePage} />
        <Route exact path="/student" component={AdviseePage} />
      </Switch>
    </div>
  );
}

export default App;
