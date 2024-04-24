import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { UploadFormVlaue } from './types';
import { createProgressTemplate } from './helpers';
import { doc, updateDoc } from 'firebase/firestore';
import { db, auth } from 'src/services/firebase';
import { useAppDispatch } from 'src/stores/stores';
import { setData, setDates } from 'src/stores/progress/progressSlice';
import { isEmpty } from 'lodash';
import { Input } from './Input';
import { paramsFields, compositionFields } from '../types';

Modal.setAppElement('#root');

const UploadModal: FC<{ open: boolean; closeModal: () => void }> = ({ open, closeModal }) => {
  const methods = useForm<UploadFormVlaue>({ mode: 'onSubmit' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const dispatch = useAppDispatch();

  const handleClose = () => {
    reset();
    closeModal();
  };

  const handleUpload: SubmitHandler<UploadFormVlaue> = async (data) => {
    if (!auth.currentUser) return;

    const progress = createProgressTemplate(data);

    await updateDoc(doc(db, 'users', auth.currentUser.uid), progress);
    dispatch(setData(progress));
    dispatch(setDates([data.date]));
    reset();

    handleClose();
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleClose}
      style={{
        content: {
          width: 'fit-content',
          height: 'fit-content',
          margin: 'auto',
        },
      }}
    >
      <h2 className="text-xl">Upload new data</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleUpload)} className="py-2">
          <input type="date" className="py-2 outline-none" {...register('date', { required: true })} />
          <div className="flex gap-5">
            <div>
              {paramsFields.map((field) => {
                return <Input key={field.label} name={field.name} label={field.label} />;
              })}
            </div>
            <div>
              {compositionFields.map((field) => {
                return <Input key={field.label} name={field.name} label={field.label} />;
              })}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-red">{isEmpty(errors) ? '' : 'Empty fields not allowed'}</p>
            <input
              type="submit"
              value="Save"
              className="mt-2 cursor-pointer rounded-sm bg-blue px-4 py-2 text-gray-200 hover:text-white"
            />
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export { UploadModal };
