import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { progressSelector } from 'src/stores/progress/progressSlice';
import { TableHeaders } from '../TableHeaders';
import { compositionFields } from '../types';

const BodyCompositionTable = () => {
  const progress = useSelector(progressSelector);

  return (
    <div className="p-5">
      <TableHeaders fields={compositionFields} />
      <table cellPadding={10}>
        <thead>
          <tr>
            {Object.keys(progress).map((date) => {
              return (
                <th className="border-2 border-black bg-gray-200" key={date}>
                  {format(new Date(date).toISOString(), 'dd.MM.yyyy')}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyComposition.weight}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyComposition.massIndex}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyComposition.fat}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyComposition.muscle}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyComposition.water}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { BodyCompositionTable };
