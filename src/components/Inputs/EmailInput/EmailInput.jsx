// EmailInput.js
import React from 'react';

const EmailInput = ({ placeholder }) => {
    return (
        <div className="row custom-margin custom-padding-5 container">

        <div className="e-input-group col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
            <input
                className="e-input"
                type="email"
                placeholder={placeholder}
            />
        </div>
        </div>
    );
};

export default EmailInput;
