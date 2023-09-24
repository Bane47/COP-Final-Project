// ValidationStateInput.js
import React from 'react';

const ValidationStateInput = ({ placeholder, validationState }) => {
    return (
        <div className="row custom-margin custom-padding-5">

        <div className={`e-input-group e-${validationState.toLowerCase()}`}>
            <input className="e-input" type="text" placeholder={placeholder} />
        </div>
             </div>

    );
};

export default ValidationStateInput;
