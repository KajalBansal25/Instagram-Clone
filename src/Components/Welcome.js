import React from "react";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h1 className="heading">Instagram</h1>
        <div>
          <form>
            <div className="usernamediv">
              <p>Welcome to the world of Instagram</p>
            </div>

            <div>
              <input
                type="submit"
                className="login"
                onClick={() => navigate("/signup")}
                value="Go"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <hr className="horizontal" />
              <span>or</span>
              <hr className="horizontal" />
            </div>
            <p>
              <a className="forgot" href="#">
                Enjoy the world of social media
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Welcome;
