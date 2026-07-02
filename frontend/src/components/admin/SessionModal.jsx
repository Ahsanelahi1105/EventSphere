import React from "react";

const SessionModal = ({
  show,
  onClose,
  formData,
  handleChange,
  handleSubmit,
  expos,
}) => {
  if (!show) return null;

  return (
    <div
      className="modal d-block"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">

        <div className="modal-content">

          <div className="modal-header">

            <h5 className="modal-title">
              Session Details
            </h5>

            <button
              className="btn-close"
              onClick={onClose}
            ></button>

          </div>

          <div className="modal-body">

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>Session Title</label>

                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>Speaker Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="speakerName"
                  value={formData.speakerName}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>Expo</label>

                <select
                  className="form-select"
                  name="expo"
                  value={formData.expo}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Expo
                  </option>

                  {expos.map((expo) => (
                    <option
                      key={expo._id}
                      value={expo._id}
                    >
                      {expo.title}
                    </option>
                  ))}

                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label>Date</label>

                <input
                  type="date"
                  className="form-control"
                  name="sessionDate"
                  value={formData.sessionDate}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>Start Time</label>

                <input
                  type="text"
                  className="form-control"
                  name="startTime"
                  placeholder="09:00 AM"
                  value={formData.startTime}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>End Time</label>

                <input
                  type="text"
                  className="form-control"
                  name="endTime"
                  placeholder="11:00 AM"
                  value={formData.endTime}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="mb-3">

              <label>Hall / Room</label>

              <input
                type="text"
                className="form-control"
                name="hall"
                value={formData.hall}
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label>Description</label>

              <textarea
                rows="3"
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label>Status</label>

              <select
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Upcoming">
                  Upcoming
                </option>

                <option value="Live">
                  Live
                </option>

                <option value="Completed">
                  Completed
                </option>

              </select>

            </div>

          </div>

          <div className="modal-footer">

            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save Session
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SessionModal;
