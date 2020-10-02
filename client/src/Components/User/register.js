import React, { useState } from "react";
import UserPool from "./UserPool";

//import { Redirect } from "react-router-dom";
import "./style.scss";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(username, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div className="base-container">
      <h1 className="header">Create Room</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="content">
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                //type="email"
                //name="email"
                placeholder="Id"
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
            <button type="submit" className="btn">
              Create
            </button>
          </div>
          <p className="footer2">
            {" "}
            Already a member? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
