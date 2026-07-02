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

        <div>

          <h4 className="mb-0 fw-bold">
            Welcome Back 👋
          </h4>

          <small className="text-muted">
            Manage your EventSphere system
          </small>

        </div>

        <div
          className="input-group"
          style={{
            width: "340px",
          }}
        >
          <span className="input-group-text">
            <FaSearch />
          </span>

          <input className="input-group shadow-sm rounded-3 overflow-hidden"
            type="text"
            className="form-control"
            placeholder="Search..."
          />
        </div>

      </div>

      <div className="d-flex align-items-center gap-4">

        <div
          className="position-relative"
          style={{ cursor: "pointer" }}
        >

          <FaBell size={22} />

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{
              fontSize: "10px",
            }}
          >
            3
          </span>

        </div>

        <div className="dropdown">

          <button
            className="btn btn-white shadow-sm rounded-pill px-3 d-flex align-items-center gap-2"
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
