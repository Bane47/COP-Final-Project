import * as React from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const InputField = (props) => {
    const [password, setPassword] = React.useState(props.password);
    const [confirmPassword, setConfirmPassword] = React.useState(props.confirmPassword);
    const [passwordsMatch, setPasswordsMatch] = React.useState(true);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setConfirmPassword((prevConfirmPassword) => {
            const match = newPassword === prevConfirmPassword;
            setPasswordsMatch(match);
            return prevConfirmPassword;
        })
    }

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordsMatch((prevPasswordsMatch) => {
            const match = password === newConfirmPassword;
            return match;
        });
    };

    return (
        <>
            {props.type !== 'password' ? (
                <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                    <TextBoxComponent placeholder={props.textName} type={props.type} floatLabelType="Auto" />
                </div>
            ) : (
                <div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 ">
                        <TextBoxComponent
                            type="password"
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            value={password}
                            floatLabelType="Auto"
                        />
                        <TextBoxComponent
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleConfirmPasswordChange}
                            value={confirmPassword}
                            floatLabelType="Auto"
                        />
                    </div>
                    {!passwordsMatch && (
                        <p style={{ color: 'red' }}>Passwords do not match</p>
                    )}
                </div>
            )}
        </>
    );
};

export default InputField;
