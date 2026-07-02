import React from "react";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="exhibitor-navbar">

      <div className="navbar-left">

        <h4>Exhibitor Dashboard</h4>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

      </div>

      <div className="navbar-right">

        <button className="notification-btn">

          <FaBell />

          <span className="notify-dot"></span>

        </button>

        <div className="profile-dropdown dropdown">

          <button
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
          >

            <FaUserCircle size={25} />

            <span className="ms-2">
              Tech Solutions
            </span>

          </button>

          <ul className="dropdown-menu dropdown-menu-end">

            <li>

              <button className="dropdown-item">

                Profile

              </button>

            </li>

            <li>

              <button
                className="dropdown-item text-danger"
                onClick={logout}
              >

                <FaSignOutAlt className="me-2"/>

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