import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaThLarge,
  FaUsers,
  FaMicrophone,
  FaChartBar,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

const AdminSidebar = () => {

  const menus = [

    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },

    {
      name: "Expos",
      icon: <FaCalendarAlt />,
      path: "/admin/expos",
    },

    {
      name: "Booths",
      icon: <FaThLarge />,
      path: "/admin/booths",
    },

    {
      name: "Exhibitors",
      icon: <FaUsers />,
      path: "/admin/exhibitors",
    },

    {
      name: "Sessions",
      icon: <FaMicrophone />,
      path: "/admin/sessions",
    },

    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/admin/reports",
    },

    {
      name: "Analytics",
      icon: <FaChartLine />,
      path: "/admin/analytics",
    },

    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },

  ];

  return (

    <div className="admin-sidebar">

      {/* Logo */}

      <div className="text-center py-4 border-bottom border-secondary">

        <h2
          className="fw-bold"
          style={{
            letterSpacing: "1px",
          }}
        >
          EventSphere
        </h2>

        <small className="text-secondary">
          Expo Management System
        </small>

      </div>

      {/* Admin Profile */}

      <div className="text-center py-4">

        <div
          style={{
            width: "75px",
            height: "75px",
            margin: "auto",
            borderRadius: "50%",
            background: "#2563eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            color: "#fff",
          }}
        >
          <FaUserShield />
        </div>

        <h6 className="text-white mt-3 mb-1">
          Administrator
        </h6>

        <small className="text-secondary">
          Super Admin
        </small>

      </div>

      {/* Menu */}

      <div className="px-2">

        {menus.map((menu) => (

          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            {menu.icon}

            <span>{menu.name}</span>

          </NavLink>

        ))}

      </div>

      {/* Bottom */}

      <div
        className="mt-auto p-3"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >

        <button
          className="btn btn-danger w-100"
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </button>

      </div>

    </div>

  );

};

export default AdminSidebar;