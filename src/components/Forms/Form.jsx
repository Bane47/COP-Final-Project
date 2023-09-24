import React, { useEffect, useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '', // Add the confirmPassword field to formData
    });
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handlePasswordCheck = (e) => {
        const confirmPassword = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            confirmPassword: confirmPassword,
        }));
        setPasswordsMatch(formData.password === confirmPassword);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        

    };

    useEffect(() => {
        console.log(formData);
    }, [formData]); // Add formData as a dependency to useEffect

    return (
        <div>
            <div className='container'>
                <form onSubmit={handleFormSubmit}>
                    <TextBoxComponent
                        placeholder='Name'
                        type='text'
                        value={formData.name}
                        onChange={(e) => handleChange(e, 'name')}
                        floatLabelType="Auto"
                    />
                    <TextBoxComponent
                        placeholder='Age'
                        type='number'
                        value={formData.age}
                        onChange={(e) => handleChange(e, 'age')}
                        floatLabelType="Auto"
                    />
                    <TextBoxComponent
                        placeholder='Email'
                        type='email'
                        value={formData.email}
                        onChange={(e) => handleChange(e, 'email')}
                        floatLabelType="Auto"
                    />
                    <TextBoxComponent
                        placeholder='Contact'
                        type='tel'
                        value={formData.contact}
                        onChange={(e) => handleChange(e, 'contact')}
                        floatLabelType="Auto"
                    />
                    <TextBoxComponent
                        placeholder='Password'
                        type='password'
                        value={formData.password}
                        onChange={(e) => handleChange(e, 'password')}
                        floatLabelType="Auto"
                    />
                    <TextBoxComponent
                        placeholder='Confirm Password'
                        type='password'
                        value={formData.confirmPassword}
                        onChange={handlePasswordCheck}
                        floatLabelType="Auto"
                    />

                    {!passwordsMatch && (
                        <p style={{ color: 'red' }}>Passwords do not match</p>
                    )}
                    <div className='mx-auto d-flex  mt-5 container'>
                    <ButtonComponent type='submit'>Submit</ButtonComponent>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
