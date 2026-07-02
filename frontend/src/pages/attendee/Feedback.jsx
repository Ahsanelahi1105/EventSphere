import React, { useState } from "react";
import { FaStar, FaPaperPlane } from "react-icons/fa";

const Feedback = () => {
  const [rating, setRating] = useState(5);

  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Feedback
        </h2>

        <p className="text-muted">
          Share your experience with EventSphere
        </p>

      </div>

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "18px",
            }}
          >

            <div className="card-body p-5">

              <h3 className="fw-bold mb-4">
                Rate Your Experience
              </h3>

              {/* Rating */}

              <div className="mb-4 text-center">

                {[1, 2, 3, 4, 5].map((star) => (

                  <FaStar
                    key={star}
                    onClick={() => setRating(star)}
                    style={{
                      cursor: "pointer",
                      fontSize: "40px",
                      marginRight: "10px",
                      color:
                        star <= rating
                          ? "#F59E0B"
                          : "#D1D5DB",
                    }}
                  />

                ))}

              </div>

              {/* Event */}

              <div className="mb-3">

                <label className="form-label fw-semibold">
                  Select Event
                </label>

                <select className="form-select">

                  <option>AI & Technology Expo</option>

                  <option>Healthcare Expo</option>

                  <option>Startup Summit</option>

                </select>

              </div>

              {/* Feedback */}

              <div className="mb-4">

                <label className="form-label fw-semibold">
                  Comments
                </label>

                <textarea
                  rows="6"
                  className="form-control"
                  placeholder="Share your experience..."
                ></textarea>

              </div>

              <button className="btn btn-primary btn-lg">

                <FaPaperPlane className="me-2" />

                Submit Feedback

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Feedback;