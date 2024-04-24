import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { compareAsc } from 'date-fns';
import { Progress } from 'src/models/progress';
import { RootState } from 'src/stores/stores';

const initialState: { progress: Progress; dates: string[] } = {
  progress: {},
  dates: [],
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Progress>) => {
      state.progress = { ...state.progress, ...action.payload };
    },
    setDates: (state, action: PayloadAction<string[]>) => {
      state.dates = [...state.dates, ...action.payload].sort((a, b) => compareAsc(a, b));
    },
  },
});

export const progressSelector = (state: RootState) => state.rootReducer.progress.progress;
export const datesSelector = (state: RootState) => state.rootReducer.progress.dates;

export const { setData, setDates } = progressSlice.actions;

export default progressSlice.reducer;
