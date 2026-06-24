import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import InputField from "../../components/auth/InputField";
import AuthButton from "../../components/auth/AuthButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <AuthLayout>
      <AuthCard>

        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">
            Forgot Password
          </h2>

          <p className="text-muted">
            Enter your email to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <AuthButton title="Send Reset Link" />

        </form>

        <div className="text-center mt-4">

          <Link
            to="/login"
            className="text-decoration-none fw-bold"
          >
            ← Back to Login
          </Link>

        </div>

      </AuthCard>
    </AuthLayout>
  );
};

export default ForgotPassword;