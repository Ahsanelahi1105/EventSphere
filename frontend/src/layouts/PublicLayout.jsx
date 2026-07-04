import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/home/Navbar";

import "../styles/home.css";

const PublicLayout = () => {
  return (
    <>

      <Navbar />

      <Outlet />

    </>
  );
};

export default PublicLayout;