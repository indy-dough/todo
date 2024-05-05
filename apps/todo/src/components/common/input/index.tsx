import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={`w-full border border-zinc-200 text-zinc-950 rounded-md px-3 py-1 text-sm focus:ring-1 ring-zinc-400 outline-none ${
        props.className || ''
      }`}
    />
  );
}
