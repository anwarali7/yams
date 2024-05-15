import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { yamsApi } from 'src/features/yams-api/yamsApi.jsx';
import pastriesWonReducer from '../features/pastriesWon/pastriesWonSlice';

const store = configureStore({
  reducer: {
    pastriesWon: pastriesWonReducer,
    [yamsApi.reducerPath]: yamsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(yamsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
