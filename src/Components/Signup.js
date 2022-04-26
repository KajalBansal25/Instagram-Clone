import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const axios = require("axios");

const Signup = () => {
  const navigate = useNavigate();
  const [warning, setWarning] = useState("");
  const [text, setText] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let mobile = null,
      email = null;
    let dataOfSignup = {
      email,
      mobile,
      username,
      fullname,
      password,
    };

    if (/^\d{10}$/.test(text)) {
      dataOfSignup.mobile = text;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
      dataOfSignup.email = text;
    }

    console.log("credentials>>>signup>>>", dataOfSignup);

    axios
      .post("http://localhost:8086/user/signup", dataOfSignup)
      .then((response) => {
        console.log("response>>>signup>>>", response);
        let token=response.data.data.accessToken;
        localStorage.setItem("token",JSON.stringify(token))
        response.data.success
          ? navigate("/post")
          : setWarning("Neither email nor phone number");
      })
      .catch((error) => {
        console.log("handle error>>>signup", error);
      });
  };

  return (
    <>
      <div className="containersignup">
        <h1 className="heading">Instagram</h1>
        <div className="signuptosee">
          <p> Sign up to see photos and videos from your friends.</p>
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
                placeholder="email or mobile number"
                onChange={(e) => setText(e.target.value)}
                minLength="8"
              />
              <div
                className="mobilenumberdiv"
                style={{ color: "red", marginBottom: "6px" }}
              >
                {warning}
              </div>
            </div>
            <div className="fullnamediv">
              <input
                className="fullname"
                placeholder="Full Name"
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="usernamediv">
              <input
                className="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="passworddiv">
              <input
                className="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                required
              />
            </div>
            <div>
              <button className="signup">Sign up</button>
            </div>
            <div className="bysigningup">
              <p>
                By signing up, you agree to our Terms , Data Policy and Cookies
                Policy .
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="havingaccount">
        <p> Have an account?</p>
        <a href="#" onClick={() => navigate("/login")}>
          Sign In?
        </a>
      </div>
    </>
  );
};
export default Signup;
