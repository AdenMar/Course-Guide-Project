import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";

class AdviseeTableBody extends Component {
  render() {
    const { advisees } = this.props; //this.props.people
    return (
      <tbody>
        {advisees.map((advisee, index) => (
          <tr key={index}>
            <td>{advisee.lName}</td>
            <td>{advisee.fName}</td>
            <td>
              <a href={"mailto:" + advisee.email}> {advisee.email} </a>{" "}
            </td>
            <td>
              <Link to={`/student`}> {advisee.studentID} </Link>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

// ${advisee.studentID}

export default AdviseeTableBody;
