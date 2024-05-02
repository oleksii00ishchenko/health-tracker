import { useSelector } from 'react-redux';
import { progressSelector, setData } from 'src/stores/progress/progressSlice';
import { Cell } from '../Cell';
import { formatDate } from './helpers';
import { RowProps } from './types';
import { useAppDispatch } from 'src/stores/stores';
import { compareAsc } from 'date-fns';
import { FireStoreService } from 'src/services/firebase';

const Row = ({ rowName, table }: RowProps) => {
  const progress = useSelector(progressSelector);
  const dispatch = useAppDispatch();

  const isDate = rowName === 'date';

  return (
    <tr>
      {Object.keys(progress)
        .sort((a, b) => compareAsc(a, b))
        .map((date) => {
          const cellValue = isDate ? formatDate(date) : progress[date][table][rowName];

          const handleBlur = async (value: string) => {
            const targetField = `${date}.${table}.${rowName}`;

            await FireStoreService.updateProgress(targetField, Number(value));

            dispatch(
              setData({
                [date]: { ...progress[date], [table]: { ...progress[date][table], [rowName]: Number(value) } },
              }),
            );
          };

          return <Cell value={cellValue} onBlur={handleBlur} key={`${table + rowName + date}`} isDate={isDate} />;
        })}
    </tr>
  );
};

export { Row };
