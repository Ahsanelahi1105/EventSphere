
import React from "react";

const ExpoModal = ({
  show,
  onClose,
  formData,
  handleChange,
  handleSubmit,
}) => {
  if (!show) return null;

  return (
    <div
      className="modal d-block"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">

          <div className="modal-header">
            <h4>Add New Expo</h4>

            <button
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body">

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Title</label>

                <input
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Category</label>

                <input
                  className="form-control"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label>Description</label>

                <textarea
                  className="form-control"
                  rows="3"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Venue</label>

                <input
                  className="form-control"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>City</label>

                <input
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Country</label>

                <input
                  className="form-control"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Status</label>

                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Draft</option>
                  <option>Upcoming</option>
                  <option>Active</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Start Date</label>

                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>End Date</label>

                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Start Time</label>

                <input
                  type="time"
                  className="form-control"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>End Time</label>

                <input
                  type="time"
                  className="form-control"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Registration Fee</label>

                <input
                  type="number"
                  className="form-control"
                  name="registrationFee"
                  value={formData.registrationFee}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Max Exhibitors</label>

                <input
                  type="number"
                  className="form-control"
                  name="maxExhibitors"
                  value={formData.maxExhibitors}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>

          <div className="modal-footer">

            <button
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save Expo
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ExpoModal;
