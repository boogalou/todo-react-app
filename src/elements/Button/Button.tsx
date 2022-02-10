import React, { FC, ReactNode, useState, } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';


type ButtonProps = {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  callback?: (evt: React.MouseEvent<HTMLButtonElement> ) => void;
}

export const Button: FC<ButtonProps> = ({active, callback, children, className, disabled}: ButtonProps) => {

  const classes = classNames(styles.btn, styles[className!],  active );

  const [isActive, setIsActive] = useState()

  console.log(`btn>>`, classes, active);

  return (
    <button
      onClick={ callback }
      className={ classes }
      disabled={ !disabled }
    >
      { children }
    </button>
  );
};

Button.defaultProps = {
  active: false,
  className: styles.btn,
  disabled: true,
  children: 'Default button',
  callback() {
  },
};