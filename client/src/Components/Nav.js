import React from "react";
import { Link, withRouter } from "react-router-dom";

class Nav extends React.Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  navStyle = {
    color: "white",
  };

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="/#" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <h3>Hello</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
  // return (
  //   <nav>
  //     <h3>Hello</h3>
  //     <ul className="nav-item">
  //       <Link style={navStyle} to="/register" class="nav-link">
  //         <li>Register</li>
  //       </Link>
  //       <Link style={navStyle} to="/login"class="nav-link">
  //         <li>Login</li>
  //       </Link>
  //       <Link style={navStyle} to="/callPage"class="nav-link">
  //         <li>CallPage</li>
  //       </Link>

  //     </ul>
  //     <ul className="nav-item">
  //       <Link style={navStyle} to="/profile" class="nav-link">
  //         <li>Profile</li>
  //       </Link>
  //       <li className="nav-item">
  //         <a href="" onClick={this.logOut.bind(this)} className="nav-link">
  //           Logout
  //         </a>
  //       </li>
  //     </ul>
  //   </nav>
  // )
}

export default withRouter(Nav);
