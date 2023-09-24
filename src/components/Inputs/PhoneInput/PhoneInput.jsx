// MobilePhoneNumberInput.js
import React from 'react';

const MobilePhoneNumberInput = ({ placeholder }) => {
    return (
        <>
        <br />
        <div className="row custom-margin custom-padding-5">

        <div className="e-input-group col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <input
                className="e-input"
                type="tel"
                placeholder={placeholder}
            />
        </div>
        </div>

        </>
    );
};

export default MobilePhoneNumberInput;
