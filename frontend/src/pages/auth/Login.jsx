
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import "./Auth.css";
import api from "../../services/api";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (data.success) {
        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        // Role Based Redirect

        if (data.user.role === "admin") {
          navigate("/admin/dashboard");
        }

        if (data.user.role === "exhibitor") {
          navigate("/exhibitor/dashboard");
        }

        if (data.user.role === "attendee") {
          navigate("/attendee/dashboard");
        }
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-5 col-md-7">

            <div className="auth-card">

              <div className="text-center mb-4">

                <h2 className="fw-bold text-primary">
                  EventSphere
                </h2>

                <p className="text-muted">
                  Welcome Back 👋
                </p>

              </div>

              <form onSubmit={handleLogin}>

                <div className="mb-3">

                  <label>Email</label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <FaEnvelope />
                    </span>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label>Password</label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <FaLock />
                    </span>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />

                  </div>

                </div>

                <div className="d-flex justify-content-between mb-3">

                  <div>
                    <input type="checkbox" /> Remember Me
                  </div>

                  <Link to="/forgot-password">
                    Forgot Password?
                  </Link>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

              </form>

              <div className="text-center mt-4">

                Don't have an account?

                <Link to="/register">
                  {" "}Register
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
