import React from "react";
import {
  FaCamera,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaBuilding,
  FaSave,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container-fluid">

      <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>

        {/* Cover */}

        <div
          style={{
            height: "180px",
            background:
              "linear-gradient(135deg,#4F46E5,#7C3AED)",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        ></div>

        <div className="card-body">

          <div className="row">

            {/* Left */}

            <div className="col-lg-4 text-center">

              <div
                style={{
                  marginTop: "-90px",
                }}
              >

                <img
                  src="https://ui-avatars.com/api/?name=Tech+Solutions&background=4F46E5&color=fff&size=180"
                  alt=""
                  className="rounded-circle shadow"
                  width="170"
                  height="170"
                />

                <br />

                <button className="btn btn-outline-primary mt-3">

                  <FaCamera className="me-2" />

                  Upload Logo

                </button>

              </div>

              <h3 className="fw-bold mt-4">

                Tech Solutions Pvt Ltd

              </h3>

              <span className="badge bg-success">

                Premium Exhibitor

              </span>

            </div>

            {/* Right */}

            <div className="col-lg-8">

              <h4 className="fw-bold mb-4">

                Company Information

              </h4>

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    Company Name

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Tech Solutions Pvt Ltd"
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    Owner Name

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Ahsan Khan"
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaEnvelope className="me-2"/>

                    Email

                  </label>

                  <input
                    type="email"
                    className="form-control"
                    defaultValue="tech@gmail.com"
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaPhone className="me-2"/>

                    Phone

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="+92 300 1234567"
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaGlobe className="me-2"/>

                    Website

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="www.techsolutions.com"
                  />

                </div>

                <div className="col-md-6 mb-3">

                  <label className="form-label">

                    <FaBuilding className="me-2"/>

                    Business Category

                  </label>

                  <select className="form-select">

                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Business</option>

                  </select>

                </div>

                <div className="col-12 mb-3">

                  <label className="form-label">

                    <FaMapMarkerAlt className="me-2"/>

                    Address

                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Karachi, Pakistan"
                  />

                </div>

                <div className="col-12 mb-4">

                  <label className="form-label">

                    Company Description

                  </label>

                  <textarea
                    rows="5"
                    className="form-control"
                    defaultValue="We provide innovative software solutions and participate in international technology exhibitions."
                  ></textarea>

                </div>

                <div className="col-12">

                  <button className="btn btn-primary px-5">

                    <FaSave className="me-2"/>

                    Save Changes

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;