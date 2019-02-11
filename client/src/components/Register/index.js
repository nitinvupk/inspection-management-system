import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const role = this.refs.roles.value;
    await this.props.RegisterUser({ name, email, password, role });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Register</h1>
          {!this.props.user.message ? (
            ""
          ) : this.props.user.auth ? (
            <div className="alert alert-success" role="alert">
              <strong>{this.props.user.message}</strong>
              <br /> Now login to continue{" "}
              <button type="button" className="btn btn-primary">
                <Link to="/">Login</Link>
              </button>
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              <strong>{this.props.user.message}</strong>
            </div>
          )}
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            ref="name"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            ref="email"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            ref="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <label>
            <b>Role</b>
          </label>
          <br />
          <select ref="roles" className="form-control">
            <option value="Safety Officer">Safety Officer</option>
            <option value="Safety Manager">Safety Manager</option>
            <option value="Safety Engineer">Safety Engineer</option>
          </select>
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="registerbtn"
          >
            Register
          </button>
          <h4>
            Already have an account?{" "}
            <Link className="text-info" to="/">
              Sign in
            </Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default Register;
