import React from "react";

const BoothModal = ({
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
            style={{ background: "rgba(0,0,0,.5)" }}
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">

                <div className="modal-content">

                    <div className="modal-header">

                        <h4 className="modal-title">
                            Booth Details
                        </h4>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        ></button>

                    </div>

                    <div className="modal-body">

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Booth Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="boothNumber"
                                    value={formData.boothNumber}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Booth Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="boothName"
                                    value={formData.boothName}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        <div className="mb-3">

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

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Booth Size
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="boothSize"
                                    placeholder="10x10"
                                    value={formData.boothSize}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label className="form-label">
                                    Price
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />

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
                                    <option value="Available">
                                        Available
                                    </option>

                                    <option value="Reserved">
                                        Reserved
                                    </option>

                                    <option value="Booked">
                                        Booked
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
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Close
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Save Booth
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BoothModal;
