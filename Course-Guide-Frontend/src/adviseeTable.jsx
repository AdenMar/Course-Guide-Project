import React, { Component } from "react";
import axios from "axios";
import AdviseeTableBody from "./components/adviseeTableBody";
import AdviseeTableHead from "./components/adviseeTableHead";
import { getAdvisees } from "./service/tempAdvisees";
//import { getAdvisees } from "./service/advisorService"; needs userId from login if advisor

class AdviseeTable extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }
  state = {
    advisees: [], //getPeople(),
    query: "",
  };
  componentDidMount() {
    this.setState({ advisees: getAdvisees() });
  }
  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  };
  handleLike = (advisee) => {
    const advisees = [...this.state.advisees];
    const index = advisees.indexOf(advisee);
    advisees[index].liked = !advisees[index].liked;
    this.setState({ advisees });
  };
  handleClick() {
    const toggle = !this.state.toggle;
    this.setState({ toggle }); //this.state.toggle =toggle is incorrect
  }
  filterAdviseesByName = () => {
    let advisees = [...this.state.advisees];
    if (this.state.query) {
      const filtered = advisees.filter((c) =>
        c.lName.toLowerCase().startsWith(this.state.query.toLowerCase())
      );
      advisees = filtered;
    }
    return advisees;
  };
  render() {
    const advisees = this.filterAdviseesByName();
    return (
      <React.Fragment>
        {/* <input
          type="text"
          className="form-control"
          name="search"
          placeholder="Search by Name"
          value={this.state.query}
          onChange={this.handleSearch}
        /> */}
        <div class="container">
          <div class="row" align="center">
            <div class="col">
              <table className="table">
                <AdviseeTableHead />
                <AdviseeTableBody
                  advisees={advisees}
                  onLike={this.handleLike}
                />
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdviseeTable;
