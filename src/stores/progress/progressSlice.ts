import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DocumentData } from 'firebase/firestore';
import { isEmpty } from 'lodash';
import { Progress } from 'src/models/progress';
import { FireStoreService } from 'src/services/firebase';
import { RootState } from 'src/stores/stores';
import { setDates, setFilterDates } from '../filter/filterSlice';
import { compareAsc } from 'date-fns';

const initialState: { progress: Progress; isLoading: boolean } = {
  progress: {},
  isLoading: false,
};

export const fetchUserProgress = createAsyncThunk('progress/fetchUserProgress', async (_, thunkAPI) => {
  try {
    let progress: DocumentData = {};

    const progressDb = await FireStoreService.getUserData();

    if (isEmpty(progressDb)) {
      //create document for new user
      await FireStoreService.setProgress(progress);
    } else {
      progress = { ...progressDb };
    }

    const progressDates = Object.keys(progress).sort((a, b) => compareAsc(a, b));

    thunkAPI.dispatch(setDates(progressDates));
    thunkAPI.dispatch(setFilterDates(progressDates));

    return progress;
  } catch (error) {
    return error;
  }
});

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Progress>) => {
      state.progress = { ...state.progress, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProgress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProgress.fulfilled, (state, action) => {
        state.progress = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserProgress.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const progressSelector = (state: RootState) => state.rootReducer.progress.progress;
export const isLoadingSelector = (state: RootState) => state.rootReducer.progress.isLoading;

export const { setData } = progressSlice.actions;

export default progressSlice.reducer;
