import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./User/Accounts";
import { Redirect, Link, withRouter } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";

function Nav() {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session:", session);
      setStatus(true);
    });
  });

  return (
    <Navbar bg="dark" variant="dark">
      <nav className="container-fluid navbar-dark bg-dark rounded">
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

        <div>
          {status ? (
            <div>
              <Redirect to="/profile" className="btn btn-secondary"></Redirect>
              <div>
                <ul className="navbar-nav" style={{ paddingLeft: "75em" }}>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/callPage" className="nav-link">
                      Call Page
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </li>
                </ul>
                <li className="nav-item">
                  <Button onClick={logout} className="btn1">
                    Logout
                  </Button>
                </li>
              </div>
            </div>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={{ color: "#fff" }}>
                Login
              </Link>
            </li>
          )}
        </div>
      </nav>
    </Navbar>
  );
}

export default withRouter(Nav);
