import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { profile, setting } from "./img";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const token = `${JSON.parse(localStorage.getItem("token"))}`;
  const navigate = useNavigate();
  console.log("varun>>>", token);
  const getPosts = (token) => {
    console.log("token>>>", token);

    axios({
      method: "POST",
      url: "http://localhost:8086/post/getpost",
      data: {
        id: `${JSON.parse(localStorage.getItem("id"))}`,
      },
      headers: { token: token },
    }).then((res) => {
      console.log( "res.data for get profile post",res.data);
      console.log( "res for get profile post",res.status);
      
    if(res.status===200)
      setProfiles(res.data);
      else if(res.status===401|| res.status===403){
        localStorage.clear()
        alert("u r unauthorized user hahaha hmmm")
        navigate("/login")
      }
    });
  };
  useEffect(() => {
    getPosts(token);
  }, []);

  console.log("posts shown:", posts);
  if (!token) return;

  return (
    <>
      <div className="containerofprofile">
        <div className="main">
          <div className="profileimgcontainer">
            <img
              src={profile}
              alt="profile"
              style={{ backgroundColor: "red" }}
              className="profileimg"
              onClick={() => navigate("/post")}
            />
          </div>
          <div className="profilecontent">
            <div className="profilecontainerone">
              {/* <div className="name">ID Name</div> */}
              <div className="name">
                {JSON.parse(localStorage.getItem("username"))}
              </div>
              <button className="edit">Edit Profile</button>
              <img src={setting} alt="setting" className="setting" />
            </div>
            <div className="follower">
              <div className="posts">Posts</div>
              <div className="followers">Followers</div>
              <div className="following">Following</div>
            </div>
            {/* <div className="nameofaccountholder">Kajal Bansal</div> */}
            <div className="nameofaccountholder">
              {JSON.parse(localStorage.getItem("username"))}
            </div>
          </div>
        </div>
        <div className="postsvideo">
          <div className="postss">Posts</div>
          <div className="videos">Videos</div>
          <div className="saved">Saved</div>
          <div className="tagged">Tagged</div>
        </div>
        <div className="imgcontainer">
          {/* {posts.map((post,index)=>{ */}
          {profiles.map((post, index) => {
            {
              console.log("img of profile page:", post.filePath);
            }
            return (
              <img
                src={"http://localhost:8086/" + post.filePath}
                key={index}
                alt="img_not_found"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Profile;
