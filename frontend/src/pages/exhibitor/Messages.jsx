import React from "react";
import {
  FaPaperPlane,
  FaUserCircle,
} from "react-icons/fa";

const Messages = () => {
  return (
    <div className="container-fluid">

      <h2 className="fw-bold mb-4">
        Messages
      </h2>

      <div className="row">

        <div className="col-lg-4">

          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "15px" }}
          >

            <div className="card-body">

              <h5 className="fw-bold mb-4">

                Inbox

              </h5>

              <div className="d-flex align-items-center mb-4">

                <FaUserCircle
                  size={45}
                  color="#4F46E5"
                />

                <div className="ms-3">

                  <h6 className="mb-0">

                    Event Organizer

                  </h6>

                  <small className="text-muted">

                    Booth Approved

                  </small>

                </div>

              </div>

              <div className="d-flex align-items-center">

                <FaUserCircle
                  size={45}
                  color="#4F46E5"
                />

                <div className="ms-3">

                  <h6 className="mb-0">

                    Support Team

                  </h6>

                  <small className="text-muted">

                    Need Help?

                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="col-lg-8">

          <div
            className="card border-0 shadow-sm"
            style={{
              borderRadius: "15px",
              height: "500px",
            }}
          >

            <div className="card-body d-flex flex-column">

              <h5 className="fw-bold">

                Organizer Chat

              </h5>

              <hr />

              <div className="flex-grow-1">

                <div
                  className="bg-light p-3 rounded mb-3"
                >
                  Welcome to EventSphere 👋
                </div>

                <div
                  className="bg-primary text-white p-3 rounded ms-auto"
                  style={{
                    width: "70%",
                  }}
                >
                  Thank you. Looking forward to joining the expo.
                </div>

              </div>

              <div className="input-group mt-4">

                <input
                  className="form-control"
                  placeholder="Type message..."
                />

                <button className="btn btn-primary">

                  <FaPaperPlane />

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Messages;