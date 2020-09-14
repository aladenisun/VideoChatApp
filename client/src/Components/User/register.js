import React from "react";
import "./style.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
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
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <form className="form">
          <div className="content">
            <div>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="first_name"
                  name="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
              </div>
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
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn" value="Submit">
              Register
            </button>
          </div>
          <p>
            {" "}
            Already a Member? <a href="/login">Sign In</a>
          </p>
        </form>
      </div>
    );
  }
  submit(e) {
    e.preventDefault();

    window.axios
      .post("http://passport.test/api/register", {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.auth.access_token);
      });
  }
}
export default Register;
