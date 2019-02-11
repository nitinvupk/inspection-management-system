import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user.token !== nextProps.user.token) {
      this.props.history.push('/InspectionReport');
    }
  }

  async handleSubmit(e) {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    await this.props.LoginUser({ email, password });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Login</h1>
          {!this.props.user.message ? (
            ""
          ) : this.props.user.auth ? (
            <div className="alert alert-success" role="alert">
              <strong>{this.props.user.message}</strong>
              <br /> Now login to continue{" "}
              <button type="button" className="btn btn-primary">
                <Link to="/register">Register</Link>
              </button>
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              <strong>{this.props.user.message}</strong>
            </div>
          )}
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

          <button
            type="submit"
            onClick={this.handleSubmit}
            className="registerbtn"
          >
            Login
          </button>
          <h4>
            <Link className="text-info" to="/register">
              Sign Up
            </Link>
          </h4>
        </div>
      </div>
    );
  }
}

  export default Login;
