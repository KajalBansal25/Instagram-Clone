import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    return token ? <Outlet />: <Navigate to="/login" />
};

export default ProtectedRoutes;
