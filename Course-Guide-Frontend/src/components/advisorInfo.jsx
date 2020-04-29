import React, { Component } from "react";
import "../css/MainScreen.css";
import userImg from "../img/rubyProfile.jpg";

class AdvisorInfo extends Component {
  render() {
    return (
      <div class="container">
        <div class="row" id="card">
          <img src={userImg} id="userpic" width="150px" height="150 px" />
          <div class="col-sm">
            <h5>Advisor Name: {} </h5>
            <h6>Associate Professor of Software Engineering</h6>
            <h6>Number of Advisees: 8</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvisorInfo;
