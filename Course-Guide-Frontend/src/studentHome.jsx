import React, { Component } from "react";
import Header from "./components/header.jsx";
import StudentNavBar from "./components/studentNavBar.jsx";
import StudentInfo from "./components/studentInfo.jsx";
import Footer from "./components/footer.jsx";
import CurrentScheduleTable from "./currentScheduleTable";

class StudentHome extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <StudentNavBar />
        <StudentInfo />
        <h3 style={{ textAlign: "center" }}>Current Schedule</h3>
        <CurrentScheduleTable />
        <Footer />
      </React.Fragment>
    );
  }
}

export default StudentHome;
