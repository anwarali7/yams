import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const urlApi = 'http://localhost:3001';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlApi }),
  endpoints: (builder) => ({
    getAllPastries: builder.query({
      query: () => `game/pastries`,
    }),
  }),
});

export const { useGetAllPastriesQuery } = gameApi;
