import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaMicrophone,
  FaBuilding,
} from "react-icons/fa";

const EventDetails = () => {
  return (
    <div className="container-fluid">

      {/* Banner */}

      <div
        className="card border-0 text-white mb-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,.55)",
            padding: "80px 50px",
          }}
        >
          <span className="badge bg-primary mb-3">
            Technology Expo
          </span>

          <h1 className="fw-bold">
            AI & Technology Expo 2026
          </h1>

          <p className="fs-5 mt-3">
            Experience the future of Artificial Intelligence,
            Robotics and Innovation.
          </p>

          <button className="btn btn-light btn-lg mt-3">
            Register Now
          </button>
        </div>
      </div>

      <div className="row">

        {/* Left */}

        <div className="col-lg-8">

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">

              <h3 className="fw-bold mb-4">
                Event Information
              </h3>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <FaCalendarAlt className="text-primary me-2" />
                  12 January 2026
                </div>

                <div className="col-md-6 mb-3">
                  <FaClock className="text-success me-2" />
                  09:00 AM - 06:00 PM
                </div>

                <div className="col-md-6 mb-3">
                  <FaMapMarkerAlt className="text-danger me-2" />
                  Karachi Expo Center
                </div>

                <div className="col-md-6 mb-3">
                  <FaUsers className="text-warning me-2" />
                  5000+ Visitors
                </div>

              </div>

              <hr />

              <h4 className="fw-bold">
                About Event
              </h4>

              <p className="text-muted">
                AI & Technology Expo is Pakistan's largest
                technology exhibition where startups,
                software companies and multinational
                organizations showcase their latest
                innovations. Visitors can attend seminars,
                workshops and networking sessions.
              </p>

            </div>
          </div>

          {/* Sessions */}

          <div className="card border-0 shadow-sm mb-4">

            <div className="card-body">

              <h4 className="fw-bold mb-4">

                <FaMicrophone className="me-2 text-primary" />

                Sessions

              </h4>

              <ul className="list-group">

                <li className="list-group-item">
                  Future of Artificial Intelligence
                </li>

                <li className="list-group-item">
                  Robotics & Automation
                </li>

                <li className="list-group-item">
                  Startup Funding Strategies
                </li>

              </ul>

            </div>

          </div>

          {/* Exhibitors */}

          <div className="card border-0 shadow-sm">

            <div className="card-body">

              <h4 className="fw-bold mb-4">

                <FaBuilding className="me-2 text-primary" />

                Featured Exhibitors

              </h4>

              <div className="row">

                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3 text-center">
                    Microsoft
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3 text-center">
                    Google
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3 text-center">
                    OpenAI
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="col-lg-4">

          <div className="card border-0 shadow-sm sticky-top">

            <div className="card-body">

              <h4 className="fw-bold mb-3">
                Organizer
              </h4>

              <img
                src="https://ui-avatars.com/api/?name=EventSphere&background=4F46E5&color=fff&size=200"
                alt=""
                className="rounded-circle mb-3"
                width="100"
              />

              <h5>EventSphere Team</h5>

              <p className="text-muted">
                Pakistan's leading event management platform
                organizing world-class exhibitions.
              </p>

              <button className="btn btn-primary w-100">
                Register Event
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EventDetails;