import React, { useState } from "react";
import {
  FaSearch,
  FaMicrophone,
  FaClock,
  FaMapMarkerAlt,
  FaBookmark,
} from "react-icons/fa";

const Sessions = () => {
  const [search, setSearch] = useState("");

  const sessions = [
    {
      id: 1,
      title: "Future of Artificial Intelligence",
      speaker: "John Smith",
      time: "10:00 AM",
      location: "Hall A",
      category: "AI",
    },
    {
      id: 2,
      title: "Startup Investment Strategies",
      speaker: "Sarah Khan",
      time: "12:30 PM",
      location: "Hall B",
      category: "Business",
    },
    {
      id: 3,
      title: "Cyber Security Trends",
      speaker: "Ahmed Ali",
      time: "02:00 PM",
      location: "Hall C",
      category: "Security",
    },
    {
      id: 4,
      title: "Cloud Computing 2026",
      speaker: "Michael Brown",
      time: "04:00 PM",
      location: "Hall D",
      category: "Cloud",
    },
  ];

  const filtered = sessions.filter((session) =>
    session.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">

      <div className="mb-4">
        <h2 className="fw-bold">Sessions</h2>
        <p className="text-muted">
          Browse all conference sessions
        </p>
      </div>

      {/* Search */}

      <div className="card border-0 shadow-sm mb-4">

        <div className="card-body">

          <div className="input-group">

            <span className="input-group-text">
              <FaSearch />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search Session..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>

      </div>

      {/* Session Cards */}

      <div className="row">

        {filtered.map((session) => (

          <div
            className="col-lg-6 mb-4"
            key={session.id}
          >

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "18px",
              }}
            >

              <div className="card-body">

                <span className="badge bg-primary mb-3">
                  {session.category}
                </span>

                <h4 className="fw-bold">
                  {session.title}
                </h4>

                <p className="text-muted mb-2">

                  <FaMicrophone className="me-2 text-primary" />

                  {session.speaker}

                </p>

                <p className="text-muted mb-2">

                  <FaClock className="me-2 text-success" />

                  {session.time}

                </p>

                <p className="text-muted">

                  <FaMapMarkerAlt className="me-2 text-danger" />

                  {session.location}

                </p>

                <div className="d-flex gap-2 mt-3">

                  <button className="btn btn-primary flex-fill">
                    View Details
                  </button>

                  <button className="btn btn-outline-warning">
                    <FaBookmark />
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Sessions;