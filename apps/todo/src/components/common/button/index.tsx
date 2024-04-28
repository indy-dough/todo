import { ButtonHTMLAttributes } from 'react';

import styles from './style.module.scss';

type ButtonProps = {
  pressed?: boolean;
  secondary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ pressed, secondary, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.button} ${pressed ? styles.pressed : ''} ${
        secondary ? styles.secondary : ''
      } ${props.className || ''}`}
    />
  );
}
