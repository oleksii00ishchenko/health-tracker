import { useSelector } from 'react-redux';
import { datesSelector, progressSelector, setData } from 'src/stores/progress/progressSlice';
import { Cell } from '../Cell';
import { formatDate } from './helpers';
import { RowProps } from './types';
import { FC } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from 'src/services/firebase';
import { useAppDispatch } from 'src/stores/stores';
import { debounce } from 'lodash';

const Row: FC<RowProps> = ({ rowName, table }) => {
  const progress = useSelector(progressSelector);
  const dates = useSelector(datesSelector);
  const dispatch = useAppDispatch();

  const isDate = rowName === 'date';

  return (
    <tr>
      {dates.map((date) => {
        const cellValue = isDate ? formatDate(date) : progress[date][table][rowName];

        const handleUpdate = debounce(async (value: string) => {
          if (!auth.currentUser) return;

          const targetField = `${date}.${table}.${rowName}`;

          await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            [targetField]: value,
          });

          dispatch(
            setData({
              [date]: { ...progress[date], [table]: { ...progress[date][table], [rowName]: Number(value) } },
            }),
          );
        }, 500);

        return <Cell value={cellValue} onChange={handleUpdate} key={`${table + rowName + date}`} isDate={isDate} />;
      })}
    </tr>
  );
};

export { Row };
