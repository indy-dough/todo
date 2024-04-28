import { Check } from '@phosphor-icons/react';
import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox(props: CheckboxProps) {
  return (
    <label className="w-6 h-6 border border-slate-400 rounded-md flex items-center justify-center cursor-pointer">
      {props.checked && <Check size={16} />}
      <input {...props} type="checkbox" className="hidden" />
    </label>
  );
}
