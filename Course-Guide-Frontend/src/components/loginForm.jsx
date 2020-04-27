import React, { Component } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import auth from "../service/authService";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
    isAdvisor: false,
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  validate = () => {
    const { error } = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(this.state.username + " " + this.state.password);
    console.log("submitted!");
    this.doSubmit();
  };
  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      // auth.loginWithJwt(response.headers["x-access-token"]);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={this.state.account.username}
              onChange={this.handleChange}
              id="username"
              aria-describedby="emailHelp"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {" "}
                {this.state.errors.username}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.account.password}
              name="password"
              onChange={this.handleChange}
              type="text"
              className="form-control"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {" "}
                {this.state.errors.password}
              </div>
            )}
            <Link to="/studentHome">
              <button
                disabled={this.validate()}
                className="btn btn-primary"
                style={{ marginLeft: "20%" }}
              >
                Login Student
              </button>
            </Link>
            <Link to="/advisorHome">
              <button
                disabled={this.validate()}
                className="btn btn-primary"
                style={{ marginLeft: "20%", marginTop: "10px" }}
              >
                Login Advisor
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
