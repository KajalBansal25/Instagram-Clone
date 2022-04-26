import React from "react";
import { Route, Routes ,Navigate} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Reset from "./Components/Reset";
import Forget from "./Components/Forget";
import Welcome from "./Components/Welcome";
import {  Outlet } from 'react-router-dom';

const useAuth=()=>{
  const user={loggedIn :true};
  return user && user.loggedIn;
}

const PrivateRoutes = () => {
  // let token = localStorage.getItem("token");
  const isAuth=useAuth();
  return isAuth?<Outlet />:<Login />
 
};

export default PrivateRoutes;
