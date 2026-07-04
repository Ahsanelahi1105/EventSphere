import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaStore,
  FaBuilding,
  FaMicrophone,
  FaBookmark,
  FaBell,
  FaCommentDots,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {

  const menus = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/attendee/dashboard",
    },
    {
      title: "Events",
      icon: <FaCalendarAlt />,
      path: "/attendee/events",
    },
    {
      title: "Exhibitors",
      icon: <FaBuilding />,
      path: "/attendee/exhibitors",
    },
    {
      title: "Sessions",
      icon: <FaMicrophone />,
      path: "/attendee/sessions",
    },
    {
      title: "Bookmarks",
      icon: <FaBookmark />,
      path: "/attendee/bookmarks",
    },
    {
      title: "Notifications",
      icon: <FaBell />,
      path: "/attendee/notifications",
    },
    {
      title: "Feedback",
      icon: <FaCommentDots />,
      path: "/attendee/feedback",
    },
    // {
    //   title: "Profile",
    //   icon: <FaUser />,
    //   path: "/attendee/profile",
    // },
  ];

  return (
    <aside className="attendee-sidebar">

      <div>

        {/* Logo */}

        <div className="sidebar-logo">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
            alt="logo"
          />

          <h3>EventSphere</h3>

          <span>Attendee Portal</span>

        </div>

        {/* Menu */}

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

              {menu.title}

            </NavLink>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="sidebar-footer">

        <div className="event-card-mini">

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=300"
            alt=""
          />

          <div>

            <h6>AI Expo 2026</h6>

            <small>12 Jan 2026</small>

          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;