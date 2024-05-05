import { Check } from '@phosphor-icons/react';
import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox(props: CheckboxProps) {
  return (
    <label
      className={`w-5 h-5 border border-black rounded-md flex items-center justify-center cursor-pointer shadow ${
        props.checked ? 'bg-zinc-900 text-zinc-50' : ''
      }`}
    >
      {props.checked && <Check size={12} weight="bold" />}
      <input {...props} type="checkbox" className="hidden" />
    </label>
  );
}
