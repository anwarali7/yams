import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const urlApi = 'http://localhost:3001/api/';

export const pastriesApi = createApi({
  reducerPath: 'pastriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: urlApi, credentials: 'include'}),
  endpoints: (builder) => ({
    getAllPastries: builder.query({
      query: () => `pastries`,
    }),
    getPastryById: builder.query({
      query: () => `pastry/pastry/${id}`,
    }),
    getPastryBySearch: builder.query({
      query: (word) => `pastries-search/${word}`,
    }),
    getAllPastryWithPagination: builder.query({
      query: ({ offset = 0, limit }) => `pastry/pastries/${offset}/${limit}`,
    }),
    getAllPastrySortedByQuality: builder.query({
      query: ({ offset = 0, limit }) =>
        `pastry/pastries/order-quantity/${offset}/${limit}`,
    }),
    getAllPastryCount: builder.query({
      query: () => `pastries-count`,
    }),
    addOnePastry: builder.mutation({
      // {name: 'name', quantity: 'quantity', choice: 'choice', image: 'image'}
      // required: name, quantity
      query: (formData) => ({
        url: 'pastry',
        method: 'POST',
        body: formData,
      }),
    }),
    editPastryById: builder.mutation({
      // pastry : {?name, ?quantity, ?choice, ?image}, all fields are optional
      // id has to be provided
      query: ({ id, pastry }) => ({
        url: `pastry/${id}`,
        method: 'PUT',
        body: pastry,
      }),
    }),
    deletePastryById: builder.mutation({
      query: (id) => ({
        url: `pastry/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllPastriesQuery,
  useGetPastryByIdQuery,
  useGetPastryBySearchQuery,
  useGetAllPastryWithPaginationQuery,
  useGetAllPastrySortedByQualityQuery,
  useGetAllPastryCountQuery,
  useAddOnePastryMutation,
  useEditPastryByIdMutation,
  useDeletePastryByIdMutation,
} = pastriesApi;
