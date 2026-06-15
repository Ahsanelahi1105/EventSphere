import React from "react";

const AuthCard = ({ children }) => {
  return (
    <div
      className="card shadow border-0 p-4"
      style={{
        width: "100%",
        maxWidth: "500px",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default AuthCard;