import React from 'react';

import styles from '../Input.module.scss';
import { InputField } from '../../../elements/Input/InputField';
import { Button } from '../../../elements/Button/Button';

import { Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForms';
import { RegistrationData } from '../userAuth.interface';
import { EMAIL, NAME } from '../regexp';
import { useDispatch } from 'react-redux';
import { asyncRequest } from '../../../actions';


export const Registration = () => {

  const dispatch = useDispatch();

  const {data: user, changeHandler, submitHandler, errors} = useForm<RegistrationData>({
    validations: {
      name: {
        required: {
          value: true,
          message: 'Обязательное для заполнения поле',
        },
        pattern: {
          value: NAME,
          message: 'Имя Должно состоять из букв латинского алфафита или цифр, И должно быть не 3 и не более 30 символов',
        }
      },

      email: {
        required: {
          value: true,
          message: 'Обязательное для заполнения поле',
        },

        pattern: {
          value: EMAIL,
          message: 'Не правильно введен адрес почты',
        }
      },

      password: {
        required: {
          value: true,
          message: 'Обязательное для заполнения поле',
        },
        custom: {
          isValid: (value) => value.length > 7,
          message: 'Минимальная длинна пароля - 8 символов',
        },
      },
      confirmPassword: {
        required: {
          value: true,
          message: 'Обязательное для заполнения поле',
        },
        custom: {
          isValid: (value): boolean => value === user.password,
          message: 'Пароль не совпадает...',
        },
      },
    },

    onSubmit: () => dispatch(asyncRequest({
        name: user.name,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword
      }
    )),
    initialValues: {name: '', email: '', password: '', confirmPassword: ''},
  });


  return (
    <>
      <div className={ styles.container }>
        <form className={ styles.form } onSubmit={ submitHandler } noValidate={ true }>
          <h2 className={ styles.form__title }>Регистрация</h2>

          { errors.name && <span className="error">{ errors.name }</span> }
          <InputField
            id="name"
            label="name"
            type="text"
            placeholder={ 'Your name' }
            classes={ styles.form__input }
            value={ user.name }
            callback={ changeHandler('name') }
          />

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

          { errors.confirmPassword && <span className="error">{ errors.confirmPassword }</span> }
          <InputField
            id="password"
            label="password"
            type="password"
            placeholder={ 'confirm password' }
            classes={ styles.form__input }
            value={ user.confirmPassword }
            callback={ changeHandler('confirmPassword') }
          />

          <div className={ styles['button-group'] }>
            <Button
              classes={ styles['btn--registration'] }
              disabled={ false }
              type={ 'submit' }>
              Регистрация
            </Button>
            <span className={ styles.or }>или</span>
            <Link
              className={ styles.link } to={ '/login' }>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
