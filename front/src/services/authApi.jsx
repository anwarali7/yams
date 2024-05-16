import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const urlApi = 'http://localhost:3001';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: urlApi,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({email, password}) => ({
        url: '/login',
        method: 'POST',
        body: {email, password},
      }),
    }),
    logout: builder.mutation({
      query: () => '/logout',
    }),
    me: builder.query({
      query: () => '/me',
    }),
  }),
})

export const { 
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} = authApi
