import { setDoc, doc, getDoc } from 'firebase/firestore';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth, db } from 'src/services/firebase';
import { progressSelector, setData } from 'src/stores/progress/progressSlice';
import { useAppDispatch } from 'src/stores/stores';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const progress = useSelector(progressSelector);

  const storeUserData = async () => {
    if (auth.currentUser) {
      console.log('fire');
      if (isEmpty(progress)) {
        console.log('fire 2');
        const progressDb = await getDoc(doc(db, 'users', auth.currentUser.uid));
        const data = progressDb.data();
        if (data) {
          console.log('from db');
          dispatch(setData(data));
        } else {
          console.log('from empty object');
          await setDoc(doc(db, 'users', auth.currentUser.uid), {});
          dispatch(setData({}));
        }
      }
    }
  };

  useEffect(() => {
    storeUserData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(progress).map((date, index) => (
              <th key={index}>{date.toLocaleLowerCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(progress).map((value, index) => (
            <>
              <tr>
                <td key={index}>{value.massIndex}</td>
              </tr>
              <tr>
                <td key={index}>{value.fat}</td>
              </tr>
              <tr>
                <td key={index}>{value.muscle}</td>
              </tr>
              <tr>
                <td key={index}>{value.water}</td>
              </tr>
              <tr>
                <td key={index}>{value.weight}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Dashboard };
