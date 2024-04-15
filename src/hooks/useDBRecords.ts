import { getDoc, doc, setDoc } from 'firebase/firestore';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth, db } from 'src/services/firebase';
import { progressSelector, setData } from 'src/stores/progress/progressSlice';
import { useAppDispatch } from 'src/stores/stores';

export const useDBRecords = () => {
  const dispatch = useAppDispatch();
  const progress = useSelector(progressSelector);

  const storeUserData = async () => {
    if (!auth.currentUser || !isEmpty(progress)) return;

    const progressDb = await getDoc(doc(db, 'users', auth.currentUser.uid));
    const data = progressDb.data();

    if (data) {
      dispatch(setData(data));
    } else {
      await setDoc(doc(db, 'users', auth.currentUser.uid), {});
      dispatch(setData({}));
    }
  };

  useEffect(() => {
    storeUserData();
  }, []);
};
