import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../features/results/resultsSlice';

const store = configureStore({
  reducer: {
    results: resultsReducer,
  },
});

export default store;
