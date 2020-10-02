import React from "react";
import "./style.scss";

function Profile() {
  return (
    <div className="base-container">
        <div className="col-sm-8 mx-auto">
       
      <h1 className="heading1">WELCOME
          </h1>
          <h3 className="heading1">PROFILE</h3>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td >Fist Name</td>
            </tr>
            <tr>
              <td>Last Name</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default Profile;
