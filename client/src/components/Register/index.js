import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.user.token !== nextProps.user.token) {
      this.props.history.push("/");
    }
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
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-12"></div>
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 login_registration_box">
              <h1 className="text-center">Register</h1>
              {!this.props.user.message ? (
                ""
              ) : this.props.user.auth ? (
                <div className="alert alert-success" role="alert">
                  <strong>{this.props.user.message}</strong>
                  <br /> Now login to continue{" "}
                  <button type="button" className="btn btn-primary mt-4">
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
                className="registerbtn mt-4"
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
        </div>
      </div>
    );
  }
}

export default Register;
