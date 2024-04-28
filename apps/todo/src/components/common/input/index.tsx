import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={`w-full border border-slate-400 rounded-md px-2 ${
        props.className || ''
      }`}
    />
  );
}
