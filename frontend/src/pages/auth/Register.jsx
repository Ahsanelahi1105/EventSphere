
import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import InputField from "../../components/auth/InputField";
import AuthButton from "../../components/auth/AuthButton";
import "../../styles/register.css";

const Register = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "attendee",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <AuthLayout>
      <AuthCard>

        <div className="text-center mb-4">

          <h2 className="fw-bold text-primary">
            Create Account 🚀
          </h2>

          <p className="text-muted">
            Step {step} of 2
          </p>

          <div className="progress mt-3" style={{ height: "8px" }}>
            <div
              className="progress-bar"
              style={{
                width: step === 1 ? "50%" : "100%",
              }}
            ></div>
          </div>

        </div>

        <form onSubmit={handleSubmit}>

          <div className={step === 1 ? "step active" : "step"}>

            <div className="row">

              <div className="col-6">

                <InputField
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />

              </div>

              <div className="col-6">

                <InputField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />

              </div>

            </div>

            <InputField
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Phone Number"
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <button
              type="button"
              className="btn btn-primary w-100 mt-3"
              onClick={() => setStep(2)}
            >

              Next →

            </button>

          </div>

          <div className={step === 2 ? "step active" : "step"}>

            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <div className="mb-3">

              <label className="form-label">

                Role

              </label>

              <select
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="attendee">

                  Attendee

                </option>

                <option value="exhibitor">

                  Exhibitor

                </option>

              </select>

            </div>

            <div className="form-check mb-3">

              <input
                className="form-check-input"
                type="checkbox"
                required
                id="terms"
              />

              <label htmlFor="terms">

                I agree to Terms

              </label>

            </div>

            <div className="d-flex gap-2">

              <button
                type="button"
                className="btn btn-outline-secondary w-50"
                onClick={() => setStep(1)}
              >

                ← Back

              </button>

              <div className="w-50">

                <AuthButton
                  title="Create Account"
                />

              </div>

            </div>

          </div>

        </form>

        <div className="text-center mt-4">

          <span className="text-muted">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ms-2 fw-bold text-decoration-none"
          >
            Login
          </Link>

        </div>

      </AuthCard>
    </AuthLayout>
  );
};

export default Register;
