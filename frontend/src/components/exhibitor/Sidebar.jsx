import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUserTie,
  FaFileSignature,
  FaClipboardList,
  FaStore,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {

  const menus = [

    {
      title: "Dashboard",
      path: "/exhibitor/dashboard",
      icon: <FaHome />,
    },

    {
      title: "Profile",
      path: "/exhibitor/profile",
      icon: <FaUserTie />,
    },

    {
      title: "Apply Expo",
      path: "/exhibitor/apply",
      icon: <FaFileSignature />,
    },

    {
      title: "My Applications",
      path: "/exhibitor/applications",
      icon: <FaClipboardList />,
    },

    {
      title: "Booth Selection",
      path: "/exhibitor/booth-selection",
      icon: <FaStore />,
    },

    {
      title: "My Booth",
      path: "/exhibitor/my-booth",
      icon: <FaBuilding />,
    },

    {
      title: "Messages",
      path: "/exhibitor/messages",
      icon: <FaEnvelope />,
    },

  ];

  return (

    <aside className="exhibitor-sidebar">

      <div className="sidebar-logo">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
            alt="logo"
          />

          <h3>EventSphere</h3>

          <span>Exhibitor Portal</span>

        </div>

      <div className="sidebar-menu">

        {menus.map((menu) => (

          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-item active"
                : "sidebar-item"
            }
          >

            <span className="sidebar-icon">

              {menu.icon}

            </span>

            <span>

              {menu.title}

            </span>

          </NavLink>

        ))}

      </div>

      <div className="sidebar-footer">

        <div className="company-card">

          <img
            src="https://ui-avatars.com/api/?name=Tech+Solutions&background=4F46E5&color=fff"
            alt=""
          />

          <div>

            <h6>

              Tech Solutions

            </h6>

            <small>

              Premium Exhibitor

            </small>

          </div>

        </div>

      </div>

    </aside>

  );
};

export default Sidebar;