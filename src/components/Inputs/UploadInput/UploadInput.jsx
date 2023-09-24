// UploadInput.js
import React from 'react';

const UploadInput = ({ placeholder, iconClass }) => {
    return (
        <div className="row custom-margin custom-padding-5">

        <div className="e-input-group e-float-icon-left">
            <span className={`e-input-group-icon ${iconClass}`}></span>
            <div className="e-input-in-wrap">
                <input
                    className="e-input"
                    type="text"
                    placeholder={placeholder}
                />
            </div>
        </div>
        </div>

    );
};

export default UploadInput;
