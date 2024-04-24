import { FC } from 'react';
import { TableHeadersProps } from './types';

const TableHeaders: FC<TableHeadersProps> = ({ fields }) => {
  return (
    <table cellPadding={10} align="left" width={150}>
      <thead>
        <tr>
          <th className="border-2 border-black bg-gray-200 text-left">Date</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field) => {
          return (
            <tr key={field.name}>
              <td className="border-2 border-black">{field.label}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { TableHeaders };
