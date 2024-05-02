import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserProgress, progressSelector } from 'src/stores/progress/progressSlice';
import { useAppDispatch } from 'src/stores/stores';

export const useDBRecords = () => {
  const dispatch = useAppDispatch();
  const progress = useSelector(progressSelector);

  const storeUserData = async () => {
    if (isEmpty(progress)) {
      dispatch(fetchUserProgress());
    }
  };

  useEffect(() => {
    storeUserData();
  }, []);
};
