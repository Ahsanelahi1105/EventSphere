import React from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaStore,
  FaEnvelope,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

const Dashboard = () => {

  const stats = [
    {
      title: "Applied Expos",
      value: 8,
      color: "#4F46E5",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Approved",
      value: 5,
      color: "#22C55E",
      icon: <FaCheckCircle />,
    },
    {
      title: "Reserved Booth",
      value: 2,
      color: "#F59E0B",
      icon: <FaStore />,
    },
    {
      title: "Messages",
      value: 12,
      color: "#0EA5E9",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="container-fluid">

      {/* Welcome Banner */}

      <div
        className="card border-0 shadow-sm mb-4"
        style={{
          borderRadius: "18px",
          background:
            "linear-gradient(135deg,#4F46E5,#7C3AED)",
          color: "#fff",
        }}
      >

        <div className="card-body p-5">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <h2 className="fw-bold">
                Welcome Back 👋
              </h2>

              <h5 className="mb-3">
                Tech Solutions Pvt Ltd
              </h5>

              <p
                style={{
                  opacity: ".9",
                }}
              >
                Manage your expos, booth reservations,
                applications and messages from one place.
              </p>

              <button className="btn btn-light rounded-pill px-4">

                Explore Expos

              </button>

            </div>

            <div className="col-lg-4 text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                className="img-fluid"
                style={{
                  maxHeight: "180px",
                }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="row">

        {stats.map((item, index) => (

          <div
            className="col-lg-3 col-md-6 mb-4"
            key={index}
          >

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body d-flex justify-content-between align-items-center">

                <div>

                  <small className="text-muted">

                    {item.title}

                  </small>

                  <h2 className="fw-bold mt-2">

                    {item.value}

                  </h2>

                </div>

                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: item.color,
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 22,
                  }}
                >

                  {item.icon}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Bottom Section */}

      <div className="row">

        {/* Upcoming Expo */}

        <div className="col-lg-8 mb-4">

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "15px",
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
              alt=""
              className="card-img-top"
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div className="card-body">

              <span className="badge bg-success mb-3">
                Upcoming Expo
              </span>

              <h4 className="fw-bold">
                AI & Technology Expo 2026
              </h4>

              <p className="text-muted">
                Karachi Expo Centre •
                12 January 2026
              </p>

              <button className="btn btn-outline-primary">

                View Details

                <FaArrowRight className="ms-2"/>

              </button>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="col-lg-4">

          {/* Notifications */}

          <div
            className="card border-0 shadow-sm mb-4"
            style={{
              borderRadius: "15px",
            }}
          >

            <div className="card-body">

              <h5 className="fw-bold mb-4">
                Notifications
              </h5>

              <p>

                🔔 Booth A-12 Reserved

              </p>

              <p>

                📩 Organizer sent a message

              </p>

              <p>

                ✅ AI Expo Approved

              </p>

            </div>

          </div>

          {/* Quick Actions */}

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "15px",
            }}
          >

            <div className="card-body">

              <h5 className="fw-bold mb-4">
                Quick Actions
              </h5>

              <button className="btn btn-primary w-100 mb-3">

                Apply For Expo

              </button>

              <button className="btn btn-success w-100 mb-3">

                My Booth

              </button>

              <button className="btn btn-warning text-white w-100">

                Messages

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Recent Applications */}

      <div
        className="card border-0 shadow-sm mt-4"
        style={{
          borderRadius: "15px",
        }}
      >

        <div className="card-body">

          <div className="d-flex justify-content-between">

            <h4 className="fw-bold">
              Recent Applications
            </h4>

            <button className="btn btn-sm btn-outline-primary">

              View All

            </button>

          </div>

          <table className="table mt-4">

            <thead>

              <tr>

                <th>Expo</th>

                <th>Date</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>AI Expo 2026</td>

                <td>12 Jan 2026</td>

                <td>
                  <span className="badge bg-success">
                    Approved
                  </span>
                </td>

              </tr>

              <tr>

                <td>Business Expo</td>

                <td>20 Feb 2026</td>

                <td>
                  <span className="badge bg-warning text-dark">
                    Pending
                  </span>
                </td>

              </tr>

              <tr>

                <td>Startup Summit</td>

                <td>15 March 2026</td>

                <td>
                  <span className="badge bg-danger">
                    Rejected
                  </span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;