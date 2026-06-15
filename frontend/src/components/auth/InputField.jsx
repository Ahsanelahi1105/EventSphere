import React from "react";

const InputField = ({
    label,
    type,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className="mb-3">

            <label className="form-label fw-semibold">
                {label}
            </label>

            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />

        </div>
    );
};



export default InputField;