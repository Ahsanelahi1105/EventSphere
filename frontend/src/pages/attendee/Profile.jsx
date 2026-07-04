import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBookmark,
  FaCalendarAlt,
  FaEdit,
  FaSave,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container-fluid">

      {/* Page Header */}

      <div className="mb-4">

        <h2 className="fw-bold">
          My Profile
        </h2>

        <p className="text-muted">
          Manage your account information
        </p>

      </div>

      <div className="row">

        {/* Left Profile Card */}

        <div className="col-lg-4 mb-4">

          <div
            className="card border-0 shadow-sm text-center"
            style={{
              borderRadius: "18px",
            }}
          >

            <div className="card-body p-5">

              <img
                src="https://ui-avatars.com/api/?name=Muhammad+Ahsan&background=4F46E5&color=fff&size=200"
                alt="Profile"
                className="rounded-circle mb-3"
                width="140"
                height="140"
              />

              <h3 className="fw-bold">
                Muhammad Ahsan
              </h3>

              <p className="text-muted">
                Event Attendee
              </p>

              <button className="btn btn-primary mt-3">

                <FaEdit className="me-2" />

                Edit Profile

              </button>

            </div>

          </div>

          {/* Quick Stats */}

          <div
            className="card border-0 shadow-sm mt-4"
            style={{
              borderRadius: "18px",
            }}
          >

            <div className="card-body">

              <h5 className="fw-bold mb-4">
                Statistics
              </h5>

              <div className="d-flex justify-content-between mb-3">

                <span>

                  <FaCalendarAlt className="me-2 text-primary" />

                  Events

                </span>

                <strong>12</strong>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <span>

                  <FaBookmark className="me-2 text-warning" />

                  Bookmarks

                </span>

                <strong>8</strong>

              </div>

              <div className="d-flex justify-content-between">

                <span>

                  Registered Sessions

                </span>

                <strong>5</strong>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="col-lg-8">

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "18px",
            }}
          >

            <div className="card-body p-4">

              <h4 className="fw-bold mb-4">
                Personal Information
              </h4>

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Full Name
                  </label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <FaUser />
                    </span>

                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Muhammad Ahsan"
                    />

                  </div>

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <FaEnvelope />
                    </span>
            
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="ahsan@example.com"
                    />

                  </div>

                </div>

                <div className="col-md-6 mb-4">

                  <label className="form-label">
                    Phone
                  </label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <FaPhone />
                    </span>

                    <input
                      type="text"
                      className="form-control"
                      defaultValue="+92 300 1234567"
                    />

                  </div>

                </div>

              </div>

              <button className="btn btn-success">

                <FaSave className="me-2" />

                Save Changes

              </button>

            </div>

          </div>

          {/* Recent Registrations */}

          <div
            className="card border-0 shadow-sm mt-4"
            style={{
              borderRadius: "18px",
            }}
          >

            <div className="card-body">

              <h4 className="fw-bold mb-4">
                Recent Registrations
              </h4>

              <table className="table table-hover">

                <thead>

                  <tr>

                    <th>Event</th>

                    <th>Date</th>

                    <th>Status</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>AI & Technology Expo</td>

                    <td>12 Jan 2026</td>

                    <td>
                      <span className="badge bg-success">
                        Registered
                      </span>
                    </td>

                  </tr>

                  <tr>

                    <td>Startup Summit</td>

                    <td>20 Feb 2026</td>

                    <td>
                      <span className="badge bg-primary">
                        Confirmed
                      </span>
                    </td>

                  </tr>

                  <tr>

                    <td>Healthcare Expo</td>

                    <td>15 Mar 2026</td>

                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;