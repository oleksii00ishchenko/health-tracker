import { isEmpty } from 'lodash';
import { useState } from 'react';
import { CellProps } from './types';

const Cell = ({ value, isDate, onBlur }: CellProps) => {
  const [inputValue, setInputValue] = useState(() => value);

  if (isDate) {
    return <td className="border-y-2 border-r-2 border-black bg-gray-200 font-bold">{inputValue}</td>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = isEmpty(e.target.value) || e.target.value < '0' ? '0' : e.target.value;
    setInputValue(value);
    onBlur(value);
  };

  return (
    <td className={`border-y-2 border-r-2 border-black`}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-20 bg-gray-100"
      />
    </td>
  );
};

export { Cell };
