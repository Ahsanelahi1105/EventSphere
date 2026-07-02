import React from "react";
import {
  FaStore,
  FaMapMarkerAlt,
  FaUsers,
  FaBoxOpen,
  FaCheckCircle,
} from "react-icons/fa";

const MyBooth = () => {
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
                    Booth A-12
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

                    <FaMapMarkerAlt className="text-danger me-2"/>

                    Hall A

                  </p>

                </div>

                <div className="col-md-6 mb-4">

                  <h6 className="text-muted">
                    Status
                  </h6>

                  <p className="text-success">

                    <FaCheckCircle className="me-2"/>

                    Reserved

                  </p>

                </div>

                <div className="col-md-6">

                  <h6 className="text-muted">
                    Staff
                  </h6>

                  <p>

                    <FaUsers className="me-2"/>

                    5 Members

                  </p>

                </div>

                <div className="col-md-6">

                  <h6 className="text-muted">
                    Products
                  </h6>

                  <p>

                    <FaBoxOpen className="me-2"/>

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

                AI & Technology Expo

              </h5>

              <p className="text-muted">

                Karachi Expo Centre

              </p>

              <button className="btn btn-primary w-100">

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