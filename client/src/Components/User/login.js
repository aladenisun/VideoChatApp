import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(username, password)
      .then((data) => {
        console.log("logged In!", data);
      })
      .catch((err) => {
        console.error("Failed to login!", err);
      });
  };

  return (
    <div className="base-container">
      <h1 className="header">Sign in</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="content">
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                //type="email"
                //name="email"
                placeholder="Email"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                //type="password"
                //name="password"
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn mt-20">
              Login
            </button>
          </div>
          <p className="footer2">
            {" "}
            Not a Member?{" "}
            <a href="/register" className="App-link">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
