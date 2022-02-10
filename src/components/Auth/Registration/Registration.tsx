import React, { ChangeEvent, useState } from 'react';
import { InputField } from '../../elements/Input/InputField';

export const Registration = () => {

  const [textValue, SetValue] = useState('');
  const onChangeInputHandler = (evt: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    console.log(evt.target.value);
    SetValue(prevState => prevState = evt.target.value);
  };


  return (
    <>

      <InputField
        id="name"
        label="name"
        type="text"
        placeholder={ 'Your name' }
        classes={ 'classes' }
        value={ textValue }
        callback={ onChangeInputHandler }
      />

      <InputField
        id="email"
        label="email"
        type="email"
        placeholder={ 'Your email address' }
        classes={ 'classes' }
        value={ textValue }
        callback={ onChangeInputHandler }
      />

      <InputField
        id="password"
        label="password"
        type="password"
        placeholder={ 'password' }
        classes={ 'classes' }
        value={ textValue }
        callback={ onChangeInputHandler }
      />

      <InputField
        id="password"
        label="password"
        type="password"
        placeholder={ 'confirm password' }
        classes={ 'classes' }
        value={ textValue }
        callback={ onChangeInputHandler }
      />

    </>
  );
};
