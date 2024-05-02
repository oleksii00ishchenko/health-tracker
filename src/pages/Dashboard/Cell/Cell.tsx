import { isEmpty } from 'lodash';
import { FC, useState } from 'react';

const Cell: FC<{ value: string; isDate: boolean; onBlur: (value: string) => void }> = ({ value, isDate, onBlur }) => {
  const [inputValue, setInputValue] = useState(() => value);

  if (isDate) {
    return <td className="border-y-2 border-r-2 border-black bg-gray-200 font-bold">{inputValue}</td>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = isEmpty(e.target.value) ? '0' : e.target.value;
    setInputValue(value);
  };

  const handleBlur = () => {
    onBlur(inputValue);
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
