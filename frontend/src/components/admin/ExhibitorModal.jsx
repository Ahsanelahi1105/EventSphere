import React from "react";

const ExhibitorModal = ({
    show,
    onClose,
    formData,
    handleChange,
    handleSubmit,
    expos,
    booths,
}) => {
    if (!show) return null;

    return (
        <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">
                            Exhibitor Details
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <div className="modal-body">

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Company Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Owner Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="ownerName"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Category
                            </label>

                            <select
                                className="form-select"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">Select Category</option>
                                <option value="Technology">Technology</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Food & Beverage">Food & Beverage</option>
                                <option value="Automobile">Automobile</option>
                                <option value="Education">Education</option>
                                <option value="Construction">Construction</option>
                                <option value="Electronics">Electronics</option>
                            </select>
                        </div>

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Select Expo
                                </label>

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
                                <label className="form-label">
                                    Select Booth
                                </label>

                                <select
                                    className="form-select"
                                    name="booth"
                                    value={formData.booth}
                                    onChange={handleChange}
                                >
                                    <option value="">
                                        Select Booth
                                    </option>

                                    {booths.map((booth) => (
                                        <option
                                            key={booth._id}
                                            value={booth._id}
                                        >
                                            {booth.boothNumber} - {booth.boothName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Status
                                </label>

                                <select
                                    className="form-select"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="Pending">
                                        Pending
                                    </option>

                                    <option value="Approved">
                                        Approved
                                    </option>

                                    <option value="Rejected">
                                        Rejected
                                    </option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Description
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="3"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="modal-footer">

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Close
                        </button>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Save Exhibitor
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExhibitorModal;
