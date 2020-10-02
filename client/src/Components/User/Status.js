import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Accounts";
import { Redirect } from "react-router-dom";

function Status() {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session:", session);
      setStatus(true);
    });
  });

  return (
    <div>
      {status ? (
        <div>
          <Redirect to="/" className="btn btn-secondary">
          </Redirect>
          <button onClick={logout}> Logout</button>
        </div>
      ) : (
        "Please login below"
      )}
    </div>
  );
}

export default Status;
