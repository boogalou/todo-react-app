import React, { FC, FormEvent } from 'react';

import styles from '../Input.module.scss';
import { InputField } from '../../../elements/Input/InputField';
import { Button } from '../../../elements/Button/Button';

import { Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForms';
import { LoginRequest } from '../../../types/authRequest.interface';
import { loginRequest } from '../../../actions';
import { useAppDispatch } from '../../../hooks/reduxHooks';

export const Login: FC = () => {

  const dispatch = useAppDispatch();

  const {data: user, changeHandler, submitHandler, errors} = useForm<LoginRequest>({
    validations: {
      email: {
        pattern: {
          value: '^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
          message: 'неккректная почта'
        },
        required: {
          value: true,
          message: 'обязательное поле',
        },
      },
      password: {
        required: {
          value: true,
          message: 'обязательное поле',
        },
        custom: {
          isValid: (value) => value.length > 6,
          message: 'some message'
        }
      },
    },

    onSubmit: () => dispatch(loginRequest({
        email: user.email,
        password: user.password,
      }
    )), initialValues: {email: '', password: ''},

  });


  return (
    <>
      <div className={ styles.container }>
        <form className={ styles.form } onSubmit={ submitHandler } noValidate={ true }>
          <h2 className={ styles.form__title }>Войти</h2>

          { errors.email && <span className="error">{ errors.email }</span> }
          <InputField
            id="email"
            label="email"
            type="email"
            placeholder={ 'Your email address' }
            classes={ styles.form__input }
            value={ user.email }
            callback={ changeHandler('email') }
          />

          { errors.password && <span className="error">{ errors.password }</span> }
          <InputField
            id="password"
            label="password"
            type="password"
            placeholder={ 'password' }
            classes={ styles.form__input }
            value={ user.password }
            callback={ changeHandler('password') }
          />


          <div className={ styles['button-group'] }>
            <Button
              classes={ styles['btn--registration'] }
              disabled={ false }
            >
              Войти
            </Button>
            <span className={ styles.or }>или</span>
            <Link
              className={ styles.link } to={ '/registration' }>
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};