// eslint-disable-next-line import/named
import { Action, Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import progressReducer from 'src/stores/progress/progressSlice';

const combinedReducer = combineReducers({
  progress: progressReducer,
});

type State = ReturnType<typeof combinedReducer>;
type RootAction = Action<string>;

const rootReducer: Reducer<State, RootAction> = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
