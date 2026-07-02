import React, { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Events = () => {
  const [search, setSearch] = useState("");

  const events = [
    {
      id: 1,
      title: "AI & Technology Expo",
      category: "Technology",
      date: "12 Jan 2026",
      location: "Karachi Expo Center",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    },
    {
      id: 2,
      title: "Healthcare Innovation Expo",
      category: "Healthcare",
      date: "18 Feb 2026",
      location: "Lahore Expo Center",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
    },
    {
      id: 3,
      title: "Startup Summit",
      category: "Business",
      date: "25 Mar 2026",
      location: "Islamabad Convention Center",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
    },
    {
      id: 4,
      title: "Education Expo",
      category: "Education",
      date: "05 Apr 2026",
      location: "Peshawar Expo Hall",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    },
  ];

  const filtered = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">Explore Events</h2>
          <p className="text-muted mb-0">
            Discover upcoming expos and conferences
          </p>
        </div>

      </div>

      {/* Search & Filters */}

      <div className="card border-0 shadow-sm mb-4">

        <div className="card-body">

          <div className="row">

            <div className="col-lg-5 mb-3">

              <div className="input-group">

                <span className="input-group-text">
                  <FaSearch />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search events..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="col-lg-3 mb-3">

              <select className="form-select">
                <option>All Categories</option>
                <option>Technology</option>
                <option>Business</option>
                <option>Healthcare</option>
                <option>Education</option>
              </select>

            </div>

            <div className="col-lg-3 mb-3">

              <input
                type="date"
                className="form-control"
              />

            </div>

            <div className="col-lg-1 mb-3">

              <button className="btn btn-primary w-100">
                Go
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Event Cards */}

      <div className="row">

        {filtered.map((event) => (

          <div
            className="col-lg-4 col-md-6 mb-4"
            key={event.id}
          >

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >

              <div className="position-relative">

                <img
                  src={event.image}
                  alt={event.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <button
                  className="btn btn-light position-absolute"
                  style={{
                    top: 15,
                    right: 15,
                    borderRadius: "50%",
                  }}
                >
                  <FaHeart className="text-danger" />
                </button>

              </div>

              <div className="card-body">

                <span className="badge bg-primary mb-2">
                  {event.category}
                </span>

                <h5 className="fw-bold">
                  {event.title}
                </h5>

                <p className="text-muted">

                  <FaCalendarAlt className="me-2" />

                  {event.date}

                </p>

                <p className="text-muted">

                  <FaMapMarkerAlt className="me-2 text-danger" />

                  {event.location}

                </p>

                <button className="btn btn-primary w-100 mt-3">
                  View Details
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Events;