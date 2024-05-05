import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isLoadingSelector, progressSelector } from 'src/stores/progress/progressSlice';
import { UploadModal } from './UploadModal';
import { useDBRecords } from 'src/hooks/useDBRecords';
import { BodyCompositionTable } from './BodyCompositionTable';
import { BodyParamsTable } from './BodyParamsTable';
import { isEmpty } from 'lodash';
import { Filter } from './Filter';

const Dashboard = () => {
  const [isOpened, setIsOpened] = useState(false);
  const openModal = () => setIsOpened(true);
  const closeModal = () => setIsOpened(false);

  useDBRecords();

  const progress = useSelector(progressSelector);
  const isLoading = useSelector(isLoadingSelector);

  if (isLoading) {
    return (
      <div className="w-full overflow-scroll rounded-tl-lg bg-gray-100">
        <p>.....Loading</p>;
      </div>
    );
  }

  return (
    <div className="w-full overflow-scroll rounded-tl-lg bg-gray-100">
      <header className={`sticky top-0 flex justify-between border-b-2 border-gray-200 bg-gray-100 p-2`}>
        <h1>Dashboard</h1>
        <button onClick={openModal}>Upload progress</button>
      </header>

      <div className="p-5">
        {isEmpty(progress) ? (
          <p>Add progress</p>
        ) : (
          <>
            <Filter />
            <BodyParamsTable />
            <BodyCompositionTable />
          </>
        )}
      </div>
      <UploadModal open={isOpened} closeModal={closeModal} />
    </div>
  );
};

export { Dashboard };
