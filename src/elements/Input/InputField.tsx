import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label: string;
  classes: string;
  callback: (evt: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void;
}

export const InputField: FC<InputFieldProps> = ({id, type, classes, label, callback, ...attrs}: InputFieldProps) => {


  return (
    <>
      { label && <label htmlFor={ id }/> }
      <input
        name={ id }
        type={ type }
        className={ classes }
        onChange={ callback }
        { ...attrs }
      />
    </>
  );
};
