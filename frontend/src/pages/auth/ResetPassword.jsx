

import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import InputField from "../../components/auth/InputField";
import AuthButton from "../../components/auth/AuthButton";


const ResetPassword = () => {

  const navigate = useNavigate();
  const { token } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const { data } = await axios.put(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        {
          password,
        }
      );

      alert(data.message);

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Password Reset Failed"
      );

    }
  };


  return (

    <AuthLayout>

      <AuthCard>

        <div className="text-center mb-4">

          <h2 className="fw-bold text-primary">
            Reset Password 🔒
          </h2>

          <p className="text-muted">
            Create a new secure password for your account.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <InputField
            label="New Password"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <AuthButton title="Reset Password" />

        </form>

        <div className="text-center mt-4">

          <Link
            to="/login"
            className="fw-bold text-decoration-none"
          >
            ← Back to Login
          </Link>

        </div>

      </AuthCard>

    </AuthLayout>

  );
};

export default ResetPassword;