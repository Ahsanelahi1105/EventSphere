import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaTools,
} from "react-icons/fa";

const ExhibitorDetails = () => {
  return (
    <div className="container-fluid">

      {/* Banner */}

      <div
        className="card border-0 text-white mb-4"
        style={{
          background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-5">

          <div className="row align-items-center">

            <div className="col-lg-2 text-center">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                alt="OpenAI"
                className="bg-white rounded-circle p-3"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

            </div>

            <div className="col-lg-10">

              <h2 className="fw-bold">
                OpenAI
              </h2>

              <p className="mb-2">
                Artificial Intelligence Company
              </p>

              <span className="badge bg-light text-dark">
                Booth C-02
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="row">

        {/* Left */}

        <div className="col-lg-8">

          {/* About */}

          <div className="card border-0 shadow-sm mb-4">

            <div className="card-body">

              <h4 className="fw-bold mb-3">
                About Company
              </h4>

              <p className="text-muted">
                OpenAI develops cutting-edge Artificial Intelligence
                technologies including ChatGPT, DALL·E and enterprise
                AI solutions. The company focuses on creating safe and
                useful AI for individuals and businesses around the world.
              </p>

            </div>

          </div>

          {/* Products */}

          <div className="card border-0 shadow-sm mb-4">

            <div className="card-body">

              <h4 className="fw-bold mb-4">

                <FaBoxOpen className="me-2 text-primary" />

                Products

              </h4>

              <div className="row">

                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3 text-center">
                    ChatGPT
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3 text-center">
                    DALL·E
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="border rounded p-3 text-center">
                    OpenAI API
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Services */}

          <div className="card border-0 shadow-sm">

            <div className="card-body">

              <h4 className="fw-bold mb-4">

                <FaTools className="me-2 text-success" />

                Services

              </h4>

              <ul className="list-group">

                <li className="list-group-item">
                  AI Consultation
                </li>

                <li className="list-group-item">
                  Enterprise AI Solutions
                </li>

                <li className="list-group-item">
                  API Integration
                </li>

                <li className="list-group-item">
                  Machine Learning Services
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="col-lg-4">

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "18px",
            }}
          >

            <div className="card-body">

              <h4 className="fw-bold mb-4">
                Contact Information
              </h4>

              <p>

                <FaEnvelope className="text-primary me-2" />

                info@openai.com

              </p>

              <p>

                <FaPhoneAlt className="text-success me-2" />

                +1 123 456 789

              </p>

              <p>

                <FaGlobe className="text-info me-2" />

                www.openai.com

              </p>

              <p>

                <FaMapMarkerAlt className="text-danger me-2" />

                Booth C-02, Expo Hall

              </p>

              <hr />

              <button className="btn btn-primary w-100 mb-2">
                Contact Company
              </button>

              <button className="btn btn-outline-dark w-100">
                Visit Website
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ExhibitorDetails;