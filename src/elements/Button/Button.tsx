import React, { FC, ReactNode, MouseEvent } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss'

interface ButtonProps {
  type: 'submit' | 'reset' | 'button' | undefined;
  children?: ReactNode;
  classes?: string;
  disabled?: boolean;
  callback?: (evt: MouseEvent<HTMLButtonElement> ) => void;
}

export const Button: FC<ButtonProps> = ({ callback, children, classes, disabled}: ButtonProps) => {
  return (
    <button
      onClick={ callback }
      className={ cn(styles.btn, classes) }
      disabled={ disabled }
    >
      { children }
    </button>
  );
};

