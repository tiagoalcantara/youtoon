import React, { useState } from 'react';
import { FieldWrapper, Label, InputField, TextArea } from './styles';

function FormField({ type = "text", value, onChange, name, label}){
    const [filled, setFilled] = useState(!!value);

    const handleOnFocus = () => {
        setFilled(true);
    }

    const handleOnBlur = () => {
        if(!value){
            setFilled(false);
        }
    }

    const inputTag = type === "textarea" ? 
    <TextArea type="text" value={value} onChange={onChange} name={name} onFocus={handleOnFocus} onBlur={handleOnBlur}/> :  
    <InputField  type={type} value={value} onChange={onChange} name={name} onFocus={handleOnFocus} onBlur={handleOnBlur}/>;

    return (
        <FieldWrapper>
            <Label className={filled ? "filled" : ""}>
                {label}:
            </Label>
                
            {inputTag}
            
        </FieldWrapper>
    );
}

export default FormField;