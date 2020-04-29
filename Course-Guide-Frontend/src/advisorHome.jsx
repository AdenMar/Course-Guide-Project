import React, { Component } from "react";
import Header from "./components/header.jsx";
import AdvisorNavBar from "./components/advisorNavBar.jsx";
import AdvisorInfo from "./components/advisorInfo.jsx";
import AdviseeTable from "./adviseeTable.jsx";
import Footer from "./components/footer.jsx";
import auth from "./service/authService";

class AdvisorHome extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <Header />
        <AdvisorNavBar />
        <div>
          <AdvisorInfo />
          <AdviseeTable />
          <div id="id02" className="modal1">
            <form
              className="modal-content1 animate"
              action="/action_page.php"
              method="post"
            >
              <div className="imgcontainer1">
                <span
                  onclick="document.getElementById('id02').style.display='none'"
                  className="close1"
                  title="Close Modal"
                >
                  ×
                </span>
              </div>
              <div className="container">
                <label htmlFor="name">
                  <b>Full Name</b>
                </label>
                <input type="text" placeholder="..." name="uname" required />
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input type="text" placeholder="..." required />
                <label htmlFor="Message">
                  <b>Message</b>
                </label>
                <input type="text" placeholder="..." name="uname" required />
                <button
                  id="enterLogin"
                  type="button"
                  value="Login"
                  onclick="document.getElementById('id02').style.display='none'"
                >
                  Submit
                </button>
              </div>
              <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                <button
                  type="button"
                  onclick="document.getElementById('id02').style.display='none'"
                  className="cancelbtn1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div id="id03" className="modal1">
            <form
              className="modal-content1 animate"
              action="/action_page.php"
              method="post"
            >
              <div className="imgcontainer1">
                <span
                  onclick="document.getElementById('id03').style.display='none'"
                  className="close1"
                  title="Close Modal"
                >
                  ×
                </span>
              </div>
              <div className="container">
                <label id="fileUpload" htmlFor="name">
                  <b>File Upload:</b>
                </label>
                <br />
                <input type="file" name="documents" />
                <br />
                <button1
                  id="uploadButton"
                  onclick="document.getElementById('id03').style.display='none'"
                >
                  Enter
                </button1>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdvisorHome;
