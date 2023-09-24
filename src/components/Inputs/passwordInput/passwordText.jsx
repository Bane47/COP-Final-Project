import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import React, { useState } from 'react';

const PasswordForm = (props) => {
    const [password, setPassword] = useState(props.password);
    const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setConfirmPassword((prevConfirmPassword) => {
            const match = newPassword === prevConfirmPassword;
            setPasswordsMatch(match);
            return prevConfirmPassword;
        });
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordsMatch((prevPasswordsMatch) => {
            const match = password === newConfirmPassword;
            return match;
        });
    };

    return (
        <div>

            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <TextBoxComponent type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={password} floatLabelType="Auto" />

              
            </div>
            <br />
            <div className=" col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <TextBoxComponent  type="password"
                    placeholder="Confirm Password"
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword} floatLabelType="Auto" />

            </div>
            {!passwordsMatch && (
                <p style={{ color: 'red' }}>Passwords do not match</p>
            )}
        </div>

    );
};

export default PasswordForm;
