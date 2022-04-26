import React, { useState } from "react";
import reset from "./img/index";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  const axios = require("axios");

  const submitHandler = (e) => {
    e.preventDefault();

    const dataOfForget = {
      username,
    };
    axios
      .post("http://localhost:8085/user/forget", dataOfForget)
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
      <div className="containerreset">
        <img src={reset} alt="reset img" className="resetimg" />
        <h3 className="heading">Trouble Logging In?</h3>
        <div className="enteruremail">
          <p>
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="mobilenumberdiv">
              <input
                className="mobilenumber"
                placeholder="Email,Phone,or Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <button className="signup">Send Login Link</button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <hr className="horizontal" />
              <span>or</span>
              <hr className="horizontal" />
            </div>
            <h3 className="heading">Create New Account</h3>
            <div>
              <button
                className="backtologin"
                onClick={() => navigate("/login")}
              >
                Back To Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>{username}</div>
    </>
  );
};
export default Forget;
