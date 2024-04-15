import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { progressSelector } from 'src/stores/progress/progressSlice';
import { TableHeaders } from '../TableHeaders';
import { paramsFields } from '../types';

const BodyParamsTable = () => {
  const progress = useSelector(progressSelector);

  return (
    <div className="p-5">
      <TableHeaders fields={paramsFields} />
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
                  {row.bodyParams.chest}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.waist}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.hips}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.rightArm}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.leftArm}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.rightLeg}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.leftLeg}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.rightCalf}
                </td>
              );
            })}
          </tr>
          <tr>
            {Object.keys(progress).map((date) => {
              const row = progress[date];
              return (
                <td className="border-2 border-black" key={date}>
                  {row.bodyParams.leftCalf}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { BodyParamsTable };
