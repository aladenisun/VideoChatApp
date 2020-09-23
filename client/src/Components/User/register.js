import React, { useState } from "react";
import UserPool from "./UserPool";

//import { Redirect } from "react-router-dom";
import "./style.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div className="base-container">
      <h1 className="header">Register</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="content">
          <div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                //type="email"
                //name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
              Register
            </button>
          </div>
          <p>
            {" "}
            Already a member? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
