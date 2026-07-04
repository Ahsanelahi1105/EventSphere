import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const dashboardPath = () => {
    switch (role) {
      case "admin":
        return "/admin/dashboard";
      case "exhibitor":
        return "/exhibitor/dashboard";
      case "attendee":
        return "/attendee/dashboard";
      default:
        return "/";
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Event<span>Sphere</span>
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>

          {token ? (
            <>
              <Link className="dashboard-btn" to={dashboardPath()}>
                Dashboard
              </Link>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="login-btn" to="/login">
                Login
              </Link>

              <Link className="register-btn" to="/register">
                Register
              </Link>
            </>
          )}
        </nav>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </header>
  );
};

export default Navbar;