import { InputHTMLAttributes } from 'react';

import styles from './style.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={`${styles.input} ${props.className || ''}`}
    />
  );
}
