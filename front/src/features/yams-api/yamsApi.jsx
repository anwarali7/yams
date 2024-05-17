import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const urlApi = 'http://localhost:3001';

export const yamsApi = createApi({
  reducerPath: 'yamsApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlApi }),
  endpoints: (builder) => ({
    getAllPastries: builder.query({
      query: () => `game/pastries`,
    }),
    winPastries: builder.query({
      query: (quantity) => `game/win-pastries/${quantity}`,
    }),
  }),
});

export const { useGetAllPastriesQuery, useLazyWinPastriesQuery } = yamsApi;
