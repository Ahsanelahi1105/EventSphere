import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/attendee/Sidebar";
import Navbar from "../components/attendee/Navbar";

import "../styles/attendee.css";

const AttendeeLayout = () => {
  return (
    <div className="attendee-layout">

      <Sidebar />

      <div className="attendee-main">

        <Navbar />

        <div className="attendee-content">

          <Outlet />

        </div>

      </div>

    </div>
  );
};

export default AttendeeLayout;