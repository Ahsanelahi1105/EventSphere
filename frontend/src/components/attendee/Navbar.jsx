import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="attendee-navbar">

      {/* Left */}

      <div className="navbar-left">

        <h4 className="fw-bold mb-0">
          Welcome 👋
        </h4>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search events, exhibitors..."
          />

        </div>

      </div>

      {/* Right */}

      <div className="navbar-right">

        <button className="notification-btn">

          <FaBell />

          <span className="notification-badge">
            3
          </span>

        </button>

        <div className="dropdown">

          <button
            className="profile-btn dropdown-toggle"
            data-bs-toggle="dropdown"
          >

            <FaUserCircle size={28} />

            <div className="ms-2 text-start">

              <div className="fw-semibold">

                {user.firstName
                  ? `${user.firstName} ${user.lastName}`
                  : "Attendee"}

              </div>

              <small className="text-muted">

                Event Visitor

              </small>

            </div>

          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow border-0">

            <li>

              <button className="dropdown-item">

                <FaUserCircle className="me-2" />

                Profile
                  
              </button>

            </li>

            <li>

              <button className="dropdown-item">

                <FaCog className="me-2" />

                Settings

              </button>

            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>

              <button
                className="dropdown-item text-danger"
                onClick={logout}
              >

                <FaSignOutAlt className="me-2" />

                Logout

              </button>

            </li>

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Navbar;