import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    let data = {};
    data[name] = value;

    this.setState(data);
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="base-container">
        <h1 className="header">Please sign in</h1>
        <form className="form" onSubmit={this.submit}>
          <div className="content">
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="footer">
              <button type="submit" value="Submit" className="btn">
                Login
              </button>
            </div>
            <p>
              {" "}
              Not a Member? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  submit() {
    axios
      .post("http://passport.test/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("response");

        this.setState({ loggedIn: true });

        localStorage.setItem("token", response.data.auth.access_token);
      });
  }
}

export default Login;
