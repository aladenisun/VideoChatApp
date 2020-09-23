import React from "react";

function Profile() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <td>Fist Name</td>
            </tr>
            <tr>
              <td>Last Name</td>
            </tr>
            <tr>
              <td>Email</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
