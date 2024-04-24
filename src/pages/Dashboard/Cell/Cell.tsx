import { FC, useState } from 'react';

const Cell: FC<{ value: string; isDate: boolean; onChange: (value: string) => void }> = ({
  value,
  isDate,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(() => value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <td className={`${isDate && 'bg-gray-200 font-bold'} border-y-2 border-r-2 border-black`}>
      {isDate ? value : <input type="number" value={inputValue} onChange={handleChange} className="w-20 bg-gray-100" />}
    </td>
  );
};

export { Cell };
