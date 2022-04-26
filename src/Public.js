import React from "react";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import CreateNewPost from "./Components/CreateNewPost";
import Error from "./Components/Error";
import { Navigate, Route, Routes } from "react-router-dom";

const Public = ({component: Component, restricted, ...rest}) => {
  let token = localStorage.getItem("token");

  return (
    <>
      

    </>
  );
};

export default Public;
