import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

      <div className="container">

        {/* Logo */}

        <Link
          className="navbar-brand d-flex align-items-center fw-bold"
          to="/"
        >

          <FaCalendarAlt
            className="text-primary me-2"
            size={28}
          />

          <span
            style={{
              color: "#4F46E5",
              fontSize: "26px",
            }}
          >
            EventSphere
          </span>

        </Link>

        {/* Mobile */}

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">

              <NavLink
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/about"
                className="nav-link"
              >
                About
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/contact"
                className="nav-link"
              >
                Contact
              </NavLink>

            </li>

          </ul>

          {/* Right */}

          <div className="d-flex gap-2">

            <Link
              to="/login"
              className="btn btn-outline-primary px-4"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary px-4"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;