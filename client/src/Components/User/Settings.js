import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";

function Settings() {
  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  });

  return (
    <div>
      {loggedIn && (
        <>
          <pre>Settings</pre>
        </>
      )}
    </div>
  );
}

export default Settings;
