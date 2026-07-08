import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSearch,
  FaPaperPlane,
} from "react-icons/fa";

// const expos = [
//   {
//     id: 1,
//     title: "AI & Technology Expo 2026",
//     location: "Karachi Expo Centre",
//     date: "12 Jan 2026",
//     image:
//       "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
//   },
//   {
//     id: 2,
//     title: "Startup Business Summit",
//     location: "Lahore Convention Center",
//     date: "22 Feb 2026",
//     image:
//       "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200",
//   },
//   {
//     id: 3,
//     title: "Healthcare Innovation Expo",
//     location: "Islamabad Expo",
//     date: "18 Mar 2026",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
//   },
// ];





const ApplyExpo = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [expos, setExpos] = useState([]);

  const [loading, setLoading] = useState(true);

  const getExpos = async () => {
    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/expos"
      );

      if (data.success) {
        setExpos(data.expos);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    getExpos();
  }, []);

  const applyExpo = async (expoId) => {

    try {

      const { data: exhibitorData } = await axios.get(
        `http://localhost:5000/api/exhibitors/${user.id}`
      );

      const exhibitorId = exhibitorData.exhibitor._id;

      const { data } = await axios.post(
        "http://localhost:5000/api/applications",
        {
          exhibitor: exhibitorId,
          expo: expoId,
        }
      );

      alert(data.message);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Application Failed"
      );

    }

  };

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            Apply For Expo
          </h2>

          <p className="text-muted mb-0">
            Browse available expos and submit your application.
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>
        <div className="card-body">

          <div className="row">

            <div className="col-lg-6">

              <div className="input-group">

                <span className="input-group-text">
                  <FaSearch />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Expo..."
                />

              </div>

            </div>

            <div className="col-lg-3 mt-3 mt-lg-0">

              <select className="form-select">

                <option>All Categories</option>

                <option>Technology</option>

                <option>Business</option>

                <option>Healthcare</option>

              </select>

            </div>

            <div className="col-lg-3 mt-3 mt-lg-0">

              <button className="btn btn-primary w-100">

                Search

              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Expo Cards */}

      <div className="row">

        {expos.map((expo) => (

          <div className="col-lg-4 mb-4" key={expo.id}>

            <div
              className="card border-0 shadow-sm h-100"
              style={{ borderRadius: "15px" }}
            >

              <img
                // src={expo.banner}
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
                alt={expo.title}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="fw-bold">

                  {expo.title}

                </h5>

                <p className="text-muted">

                  <FaMapMarkerAlt className="me-2 text-danger" />

                  {expo.venue}

                </p>

                <p className="text-muted">

                  <FaCalendarAlt className="me-2 text-primary" />

                  {new Date(expo.startDate).toLocaleDateString()}

                </p>

                <p className="text-muted">
                  {expo.description}
                </p>

                <div className="mt-auto">

                  <button
                    className="btn btn-primary w-100"
                    onClick={() => applyExpo(expo._id)}
                  >
                    <FaPaperPlane className="me-2" />
                    Apply Now
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

export default ApplyExpo;