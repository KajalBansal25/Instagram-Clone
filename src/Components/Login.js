import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const axios = require("axios");

  const submitHandler = (e) => {
    e.preventDefault();

    const dataOfForm = {
      username,
      password,
    };

    console.log(
      "username-password>>>login>>>",
      dataOfForm
    );

    axios
      .post("http://localhost:8086/user/login", dataOfForm)
      .then((response) => {
        let id = response.data.data.response._id;
        let token = response.data.data.accessToken;
        let username = response.data.data.response.username;
        console.log("id-token-username>>>login>>>", id, token,username);
        localStorage.setItem("id", JSON.stringify(id));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("username", JSON.stringify(username));
        if (response.data.success) {
          navigate("/post");
        }
      })
      .catch((error) => {
        console.log("error>>>login>>>", error);
      });
  };

  return (
    <>
      <div className="container">
        <h1 className="heading">Instagram</h1>
        <div>
          <form onSubmit={submitHandler}>
            <div className="usernamediv">
              <input
                className="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                // minLength="8"
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
              <input type="submit" className="login" value="Log In" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <hr className="horizontal" />
              <span>or</span>
              <hr className="horizontal" />
            </div>
            <p>
              <a
                className="forgot"
                href="#"
                onClick={() => navigate("/forget")}
              >
                Forgot password?
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="nothavingaccount">
        <p> Don't have an account?</p>
        <a href="#" onClick={() => navigate("/signup")}>
          Sign up?
        </a>
      </div>
    </>
  );
};
export default Login;
