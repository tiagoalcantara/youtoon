import React, { useState } from 'react';
import {
  FieldWrapper, Label, InputField,
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

  const isTextArea = type === 'textarea';
  const fieldId = `id_${name}`;

  return (
    <FieldWrapper>
      <Label htmlFor={fieldId} className={filled ? 'filled' : ''}>
        {label}
        :
      </Label>

      {isTextArea
        ? (
          <InputField
            as="textarea"
            style={{ resize: 'none', height: '200px' }}
            value={value}
            onChange={onChange}
            name={name}
            id={fieldId}
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
            id={fieldId}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        )}

    </FieldWrapper>
  );
}

export default FormField;
