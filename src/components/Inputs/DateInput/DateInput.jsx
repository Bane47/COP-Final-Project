// DateInput.js
import React from 'react';

const DateInput = ({ placeholder }) => {
    return (
        <div className="row custom-margin custom-padding-5">

        <div className="e-input-group col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <input
                className="e-input"
                type="text"
                placeholder={placeholder}
            />
            <span className="e-input-group-icon e-date-icon"></span>
        </div>
        </div>
    );
};

export default DateInput;
