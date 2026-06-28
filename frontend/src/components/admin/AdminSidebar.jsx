
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaThLarge,
  FaUsers,
  FaMicrophone,
  FaChartBar,
  FaCog,
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
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  return (
    <div className="admin-sidebar">

      <div className="text-center py-4">

        <h3 className="fw-bold text-white">
          EventSphere
        </h3>

        <small className="text-light">
          Admin Panel
        </small>

      </div>

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
  );
};

export default AdminSidebar;
