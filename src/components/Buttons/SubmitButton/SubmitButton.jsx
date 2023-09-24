import * as React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

enableRipple(true);

function SubmitButton() {
    const handleSubmit=(e)=>{
        e.preventdefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <ButtonComponent type='submit'>Submit</ButtonComponent>
        </form>
    );
}

export default SubmitButton;
