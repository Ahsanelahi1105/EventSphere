import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaEye,
  FaCalendarAlt,
} from "react-icons/fa";

import axios from "axios";

// const applications = [
//   {
//     id: 1,
//     expo: "AI & Technology Expo 2026",
//     date: "12 Jan 2026",
//     booth: "A-12",
//     status: "Approved",
//   },
//   {
//     id: 2,
//     expo: "Startup Business Summit",
//     date: "22 Feb 2026",
//     booth: "-",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     expo: "Healthcare Innovation Expo",
//     date: "18 Mar 2026",
//     booth: "-",
//     status: "Rejected",
//   },
// ];




const MyApplications = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    try {

      // Logged in exhibitor profile

      const { data: exhibitorData } = await axios.get(
        `http://localhost:5000/api/exhibitors/${user.id}`
      );

      const exhibitorId = exhibitorData.exhibitor._id;

      // Get applications

      const { data } = await axios.get(
        `http://localhost:5000/api/applications/${exhibitorId}`
      );

      if (data.success) {
        setApplications(data.applications);
      }

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">My Applications</h2>
          <p className="text-muted mb-0">
            Track all your expo applications.
          </p>
        </div>

      </div>

      <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>
        <div className="card-body">

          <div className="input-group">

            <span className="input-group-text">
              <FaSearch />
            </span>

            <input
              className="form-control"
              placeholder="Search Application..."
            />

          </div>

        </div>
      </div>

      <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>

        <div className="card-body">

          <table className="table table-hover align-middle">

            <thead>

              <tr>

                <th>Expo Name</th>

                <th>Date</th>

                <th>Booth</th>

                <th>Status</th>

                <th className="text-center">Action</th>

              </tr>

            </thead>

            <tbody>

              {applications.map((item) => (

                <tr key={item._id}>

                  <td className="fw-semibold">

                    {item.expo ? item.expo.title : "Expo Deleted"}

                  </td>

                  <td>

                    <FaCalendarAlt className="me-2 text-primary" />

                    {new Date(item.createdAt).toLocaleDateString()}

                  </td>

                  <td>
                    {item.expo && item.expo.booth
                      ? item.expo.booth
                      : "-"}
                  </td>

                  <td>

                    <span
                      className={`badge ${item.status === "Approved"
                        ? "bg-success"
                        : item.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                        }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td className="text-center">

                    <button className="btn btn-outline-primary btn-sm">

                      <FaEye className="me-1" />

                      View

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default MyApplications;