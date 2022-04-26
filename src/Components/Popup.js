import React from "react";
import { profile } from "./img";
import { useNavigate } from "react-router-dom";

const Popup = ({ token, setToken }) => {
  // console.log("setpopup token value>>>", setToken);
  const navigate = useNavigate();
  return (
    <>
      <div className="section">
        <div className="sectionone">
          <img
            src={profile}
            alt="profile"
            className="imgprofile"
            onClick={() => {
              navigate("/profile");
            }}
          />
          Profile
        </div>
        <div
          className="logout"
          onClick={() => {
            console.log(localStorage.getItem('id'), token);
            // setToken("");
            localStorage.clear();
            navigate("/login");
          }}
        >
          Log Out
        </div>
      </div>
    </>
  );
};
export default Popup;
