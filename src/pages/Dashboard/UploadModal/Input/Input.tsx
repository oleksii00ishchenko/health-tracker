import { useFormContext } from 'react-hook-form';
import { InputProps } from './types';
import { FC } from 'react';

const Input: FC<InputProps> = ({ name, label }) => {
  const { register } = useFormContext();
  return (
    <div key={name} className="flex py-[1px]">
      <label htmlFor={name} className="block w-24">
        {label}
      </label>
      <input
        type="number"
        id={name}
        step="any"
        min={0}
        max={200}
        className="w-20 border-[1px] border-gray-200 outline-none"
        {...register(name, { required: true, valueAsNumber: true })}
      />
    </div>
  );
};

export { Input };
