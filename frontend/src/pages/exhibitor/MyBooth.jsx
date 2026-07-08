import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  FaStore,
  FaMapMarkerAlt,
  FaUsers,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";

const MyBooth = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const [booth, setBooth] = useState(null);

  const getMyBooth = async () => {
    try {

      // Logged in Exhibitor

      const { data: exhibitorData } = await axios.get(
        `http://localhost:5000/api/exhibitors/${user.id}`
      );

      const exhibitorId = exhibitorData.exhibitor._id;

      // My Booth

      const { data } = await axios.get(
        `http://localhost:5000/api/booths/my-booth/${exhibitorId}`
      );

      if (data.success) {
        setBooth(data.booth);
      }

    } catch (error) {

      console.log(error);

    }
  };

  const downloadPass = async () => {
    try {

      const user = JSON.parse(localStorage.getItem("user"));

      const { data } = await axios.get(
        `http://localhost:5000/api/exhibitors/${user.id}`
      );

      const exhibitorId = data.exhibitor._id;

      window.open(
        `http://localhost:5000/api/booths/pass/${exhibitorId}`,
        "_blank"
      );

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    getMyBooth();
  }, []);

  if (!booth) {
    return (
      <div className="container-fluid">

        <div className="alert alert-warning">

          You have not reserved any booth yet.

        </div>

      </div>
    );
  }


  return (
    <div className="container-fluid">

      <h2 className="fw-bold mb-4">
        My Booth
      </h2>

      <div className="row">

        <div className="col-lg-8">

          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px" }}
          >

            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>

                  <span className="badge bg-success">
                    Active Booth
                  </span>

                  <h3 className="fw-bold mt-3">
                    Booth {booth.boothNumber}
                  </h3>

                </div>

                <FaStore
                  size={60}
                  color="#4F46E5"
                />

              </div>

              <hr />

              <div className="row">

                <div className="col-md-6 mb-4">

                  <h6 className="text-muted">
                    Location
                  </h6>

                  <p>

                    <FaMapMarkerAlt className="text-danger me-2" />

                    {booth.expo?.venue}

                  </p>

                </div>

                <div className="col-md-6 mb-4">

                  <h6 className="text-muted">
                    Status
                  </h6>

                  <p className="text-success">

                    <FaCheckCircle className="me-2" />

                    {booth.status}

                  </p>

                </div>

                <div className="col-md-6">

                  <h6 className="text-muted">
                    Staff
                  </h6>

                  <p>

                    <FaUsers className="me-2" />

                    5 Members

                  </p>

                </div>

                <div className="col-md-6">

                  <h6 className="text-muted">
                    Products
                  </h6>

                  <p>

                    <FaBoxOpen className="me-2" />

                    18 Products

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="col-lg-4">

          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px" }}
          >

            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000"
              className="card-img-top"
              style={{
                height: "220px",
                objectFit: "cover",
              }}
              alt=""
            />

            <div className="card-body">

              <h5 className="fw-bold">

                {booth.expo?.title}

              </h5>

              <p className="text-muted">

                {booth.expo?.venue}

              </p>

              <button
                className="btn btn-primary w-100"
                onClick={downloadPass}
              >

                Download Booth Pass

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MyBooth;