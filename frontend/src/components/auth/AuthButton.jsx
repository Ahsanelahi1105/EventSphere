import React from "react";

const AuthButton = ({ title }) => {
  return (
    <button
      type="submit"
      className="btn btn-primary w-100 py-2 fw-bold"
    >
      {title}
    </button>
  );
};

export default AuthButton;