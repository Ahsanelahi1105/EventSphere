import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="admin-navbar d-flex justify-content-between align-items-center">

      <div className="d-flex align-items-center gap-3">

        <h4 className="mb-0 fw-bold">
          Admin Dashboard
        </h4>

        <div
          className="input-group"
          style={{ width: "300px" }}
        >
          <span className="input-group-text">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>

      </div>

      <div className="d-flex align-items-center gap-4">

        <FaBell
          size={22}
          style={{ cursor: "pointer" }}
        />

        <div className="dropdown">

          <button
            className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
            data-bs-toggle="dropdown"
          >
            <FaUserCircle size={22} />

            {user
              ? `${user.firstName} ${user.lastName}`
              : "Admin"}
          </button>

          <ul className="dropdown-menu dropdown-menu-end">

            <li>

              <button
                className="dropdown-item"
              >
                Profile
              </button>

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

export default AdminNavbar;
