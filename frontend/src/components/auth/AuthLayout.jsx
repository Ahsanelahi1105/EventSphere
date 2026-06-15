import React from "react";
import loginBanner from "../../assets/images/login-banner.png";

const AuthLayout = ({ children }) => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      <div className="row min-vh-100">

        {/* Left Side */}

        <div className="col-lg-6 d-none d-lg-flex bg-primary text-white" style={{ height: "100vh",}}> <div className="w-100 d-flex flex-column justify-content-center align-items-center px-5" > <img src={loginBanner} alt="EventSphere" className="img-fluid mb-4" style={{ maxWidth: "500px", width: "75%", maxHeight: "45vh", objectFit: "contain", }} /> <h1 className="fw-bold display-2 text-center"> EventSphere </h1> <p className="text-center mt-3" style={{ fontSize: "1.7rem", maxWidth: "650px", }} > Manage Expos, Exhibitors and Attendees from one modern platform. </p> </div> </div>

        {/* Right Side */}

        <div className="col-lg-6 d-flex align-items-center justify-content-center py-5">

          {children}

        </div>

      </div>
    </div>
  );
};

export default AuthLayout;