import React from "react";
import {
  FaCalendarAlt,
  FaBookmark,
  FaTrash,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Bookmarks = () => {
  const bookmarks = [
    {
      id: 1,
      title: "AI & Technology Expo",
      type: "Event",
      location: "Karachi Expo Center",
      date: "12 Jan 2026",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    },
    {
      id: 2,
      title: "Startup Summit Session",
      type: "Session",
      location: "Hall B",
      date: "20 Feb 2026",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
    },
    {
      id: 3,
      title: "Healthcare Expo",
      type: "Event",
      location: "Lahore Expo Center",
      date: "15 Mar 2026",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
    },
  ];

  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          My Bookmarks
        </h2>

        <p className="text-muted">
          Your saved events and sessions
        </p>

      </div>

      <div className="row">

        {bookmarks.map((item) => (

          <div
            className="col-lg-4 col-md-6 mb-4"
            key={item.id}
          >

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "18px",
              }}
            >

              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">

                <span className="badge bg-primary mb-2">
                  {item.type}
                </span>

                <h5 className="fw-bold">
                  {item.title}
                </h5>

                <p className="text-muted">

                  <FaCalendarAlt className="me-2" />

                  {item.date}

                </p>

                <p className="text-muted">

                  <FaMapMarkerAlt className="me-2 text-danger" />

                  {item.location}

                </p>

                <div className="d-flex gap-2 mt-3">

                  <button className="btn btn-primary flex-fill">

                    <FaBookmark className="me-2" />

                    View

                  </button>

                  <button className="btn btn-outline-danger">

                    <FaTrash />

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

export default Bookmarks;