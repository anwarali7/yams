import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { yamsApi } from 'src/features/yams-api/yamsApi.jsx';
import { authApi } from 'src/services/authApi.jsx';
import { loginSlice } from 'src/features/login/loginSlice.jsx';
import pastriesWonReducer from '../features/pastriesWon/pastriesWonSlice';

const store = configureStore({
  reducer: {
    pastriesWon: pastriesWonReducer,
    login: loginSlice.reducer,
    [yamsApi.reducerPath]: yamsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(yamsApi.middleware)
      .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
