import React, { useState } from "react";

const Reset = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  const axios = require("axios");

  const submitHandler = (e) => {
    e.preventDefault();
    const dataOfReset = {
      newPassword,
      confirmNewPassword,
    };
    console.log(dataOfReset.newPassword);
    console.log(dataOfReset.confirmNewPassword);
    axios
      .post("http://localhost:8086/user/reset", dataOfReset)
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log("handle error");
        console.log(error);
      })
      .then(function () {
        console.log("always executed");
      });
  };
  return (
    <>
      <div className="containerresett">
        <h1 className="heading">Instagram</h1>
        <div className="signuptosee">
          <p> Reset your password</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <hr className="horizontal" />
          <span>or</span>
          <hr className="horizontal" />
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="mobilenumberdiv">
              <input
                className="mobilenumber"
                placeholder="Enter new password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                className="mobilenumber"
                placeholder="Confirm new password"
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>

            <div>
              <button className="signup">Set New Password</button>
            </div>
            <div className="bysigningup">
              <p>
                By resetting up your password, you agree to our Terms , Data
                Policy and Cookies Policy .
              </p>
            </div>
          </form>
        </div>
      </div>
      <div>{newPassword}</div>
      <div>{confirmNewPassword}</div>
    </>
  );
};
export default Reset;
