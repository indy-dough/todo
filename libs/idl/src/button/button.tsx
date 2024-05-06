import { ButtonHTMLAttributes } from 'react';

import styles from './style.module.scss';

type ButtonProps = {
  pressed?: boolean;
  secondary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ pressed, secondary, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      data-pressed={pressed}
      data-theme={secondary ? 'secondary' : 'default'}
      className={`${styles.button} ${props.className || ''}`}
    />
  );
}
