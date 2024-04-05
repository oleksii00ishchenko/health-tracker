import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Progress } from 'src/models/progress';
import { RootState } from 'src/stores/stores';

const initialState: { progress: Progress } = {
  progress: {},
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Progress>) => {
      state.progress = { ...state.progress, ...action.payload };
    },
  },
});

export const progressSelector = (state: RootState) => state.rootReducer.progress.progress;

export const { setData } = progressSlice.actions;

export default progressSlice.reducer;
