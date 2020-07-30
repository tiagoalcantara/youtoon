import React, { useState } from 'react';
import {
  FieldWrapper, Label, InputField, TextArea,
} from './styles';

interface Props {
    type?: string;
    value: string;
    label: string;
    name: string;

    onChange: (e: React.FormEvent<EventTarget>) => void;
}

function FormField({
  type = 'text', value, onChange, name, label,
}: Props) {
  const [filled, setFilled] = useState(!!value);

  const handleOnFocus = () => {
    setFilled(true);
  };

  const handleOnBlur = () => {
    if (!value) {
      setFilled(false);
    }
  };

  const inputTag = type === 'textarea'
    ? (
      <TextArea
        value={value}
        onChange={onChange}
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    )
    : (
      <InputField
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    );

  return (
    <FieldWrapper>
      <Label htmlFor={name} className={filled ? 'filled' : ''}>
        {label}
        :
      </Label>

      {inputTag}

    </FieldWrapper>
  );
}

export default FormField;
