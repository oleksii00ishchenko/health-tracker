import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../stores';

const initialState: { dates: string[]; filterDates: string[] } = {
  filterDates: [],
  dates: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setDates: (state, action) => {
      state.dates = action.payload;
    },
    setFilterDates: (state, action) => {
      state.filterDates = action.payload;
    },
  },
});

export const datesSelector = (state: RootState) => state.rootReducer.filter.dates;
export const filterDatesSelector = (state: RootState) => state.rootReducer.filter.filterDates;

export const { setDates, setFilterDates } = filterSlice.actions;

export default filterSlice.reducer;
