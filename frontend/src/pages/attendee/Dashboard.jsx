import React from "react";
import {
  FaCalendarAlt,
  FaBookmark,
  FaBell,
  FaMicrophone,
  FaArrowRight,
} from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Upcoming Events",
      value: 12,
      color: "#4F46E5",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Registered Sessions",
      value: 8,
      color: "#22C55E",
      icon: <FaMicrophone />,
    },
    {
      title: "Bookmarks",
      value: 15,
      color: "#F59E0B",
      icon: <FaBookmark />,
    },
    {
      title: "Notifications",
      value: 5,
      color: "#EF4444",
      icon: <FaBell />,
    },
  ];

  const events = [
    {
      id: 1,
      title: "AI & Technology Expo",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
      date: "12 Jan 2026",
      location: "Karachi Expo Center",
    },
    {
      id: 2,
      title: "Startup Summit",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
      date: "20 Feb 2026",
      location: "Lahore Convention Center",
    },
    {
      id: 3,
      title: "Healthcare Expo",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
      date: "18 Mar 2026",
      location: "Islamabad Expo",
    },
  ];

  return (
    <div className="container-fluid">

      {/* Hero Banner */}

      <div
        className="card border-0 text-white mb-5"
        style={{
          background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-5">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <h1 className="fw-bold display-5">

                Welcome to EventSphere 👋

              </h1>

              <p className="fs-5 mt-3">

                Discover amazing expos, connect with exhibitors,
                attend inspiring sessions and grow your network.

              </p>

              <button className="btn btn-light btn-lg mt-3">

                Explore Events

                <FaArrowRight className="ms-2" />

              </button>

            </div>

            <div className="col-lg-5 text-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                style={{
                  width: "250px",
                }}
              />

            </div>

          </div>

        </div>
      </div>

      {/* Stats */}

      <div className="row mb-5">

        {stats.map((item, index) => (

          <div
            className="col-lg-3 col-md-6 mb-4"
            key={index}
          >

            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "18px",
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
                    width: 65,
                    height: 65,
                    borderRadius: "50%",
                    background: item.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 25,
                  }}
                >

                  {item.icon}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Featured Events */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h3 className="fw-bold">

          Featured Events

        </h3>

        <button className="btn btn-outline-primary">

          View All

        </button>

      </div>

      <div className="row">

        {events.map((event) => (

          <div
            className="col-lg-4 mb-4"
            key={event.id}
          >

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "18px",
              }}
            >

              <img
                src={event.image}
                alt=""
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">

                <h5 className="fw-bold">

                  {event.title}

                </h5>

                <p className="text-muted mb-2">

                  📅 {event.date}

                </p>

                <p className="text-muted">

                  📍 {event.location}

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

export default Dashboard;