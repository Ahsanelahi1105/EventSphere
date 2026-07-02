import React from "react";
import { Outlet } from "react-router-dom";

import ExhibitorSidebar from "../components/exhibitor/Sidebar";
import ExhibitorNavbar from "../components/exhibitor/Navbar";

import "../styles/exhibitor.css";

const ExhibitorLayout = () => {
  return (
    <div className="exhibitor-layout">

      <ExhibitorSidebar />

      <div className="exhibitor-main">

        <ExhibitorNavbar />

        <div className="exhibitor-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default ExhibitorLayout;