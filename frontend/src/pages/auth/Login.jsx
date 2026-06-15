import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Auth.css";

const Login = () => {
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

              <form>

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

                <button className="btn btn-primary w-100">
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