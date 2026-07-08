import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCheck,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const ApplicationManagement = () => {

  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/applications"
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

  const updateStatus = async (id, status) => {

    try {

      const { data } = await axios.put(
        `http://localhost:5000/api/applications/${id}`,
        {
          status,
        }
      );

      alert(data.message);

      getApplications();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Update Failed"
      );

    }

  };

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">
            Application Management
          </h2>

          <p className="text-muted">
            Manage Exhibitor Applications
          </p>
        </div>

      </div>

      <div className="card shadow-sm border-0">

        <div className="card-body">

          <div className="input-group mb-4">

            <span className="input-group-text">
              <FaSearch />
            </span>

            <input
              className="form-control"
              placeholder="Search..."
            />

          </div>

          <table className="table table-hover">

            <thead>

              <tr>

                <th>Company</th>

                <th>Expo</th>

                <th>Status</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {applications.map((item) => (

                <tr key={item._id}>

                  <td>

                    {item.exhibitor?.companyName}

                  </td>

                  <td>

                    {item.expo?.title}

                  </td>

                  <td>

                    <span
                      className={`badge ${
                        item.status === "Approved"
                          ? "bg-success"
                          : item.status === "Pending"
                          ? "bg-warning text-dark"
                          : "bg-danger"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() =>
                        updateStatus(
                          item._id,
                          "Approved"
                        )
                      }
                    >
                      <FaCheck />
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        updateStatus(
                          item._id,
                          "Rejected"
                        )
                      }
                    >
                      <FaTimes />
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

export default ApplicationManagement;