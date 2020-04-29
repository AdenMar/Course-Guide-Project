import React, { Component } from "react";
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
import auth from "./service/authService";
import Logout from "./components/logout";
import advisorHomePage from "./advisorHome";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    console.log(user);
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LogOut} />
          <Route
            exact
            path="/CourseList"
            component={CourseListPage}
            //user={user}
          />
          <Route exact path="/logout" component={LogOut} />
          <Route
            exact
            path="/studentHome"
            component={StudentHomePage}
            //user={user}
          />
          <Route
            exact
            path="/advisorHome"
            component={AdvisorHomePage}
            userInfo={user}
          />
          <Route exact path="/student" component={AdviseePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
